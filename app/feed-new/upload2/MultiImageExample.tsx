import * as React from "react";
import { MultiFileDropzone, type FileState } from "./multi-file";
import { useEdgeStore } from "@/lib/edgestore";

export default function MultiImageExample({
  onUploadedImages,
}: {
  onUploadedImages: (urls: string[]) => void;
}) {
  type uploadRestType = {
    url: string;
    filename: string;
  };
  const [fileStates, setFileStates] = React.useState<FileState[]>([]);
  const [uploadRes, setUploadRes] = React.useState<uploadRestType[]>([]);
  const { edgestore } = useEdgeStore();

  React.useEffect(() => {
    if (uploadRes.length > 0) {
      onUploadedImages(uploadRes.map((res) => res.url));
    }
  }, [uploadRes]);

  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  return (
    <div className="flex flex-col items-center">
      <MultiFileDropzone
        className="w-full"
        value={fileStates}
        dropzoneOptions={{
          maxFiles: 10,
          maxSize: 1024 * 1024 * 1, // 1 MB
        }}
        onFilesAdded={async (addedFiles) => {
          setFileStates([...fileStates, ...addedFiles]);
          await Promise.all(
            addedFiles.map(async (addedFileState) => {
              try {
                const res = await edgestore.publicFiles.upload({
                  file: addedFileState.file,
                  input: { type: "post" },
                  onProgressChange: async (progress) => {
                    updateFileProgress(addedFileState.key, progress);
                    if (progress === 100) {
                      // wait 1 second to set it to complete
                      // so that the user can see the progress bar
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      updateFileProgress(addedFileState.key, "COMPLETE");
                    }
                  },
                });
                setUploadRes((uploadRes) => [
                  ...uploadRes,
                  {
                    url: res.url,
                    filename: addedFileState.file.name,
                  },
                ]);
              } catch (err) {
                updateFileProgress(addedFileState.key, "ERROR");
              }
            })
          );
        }}
      />
      {/* {uploadRes.length > 0 && (
          <div className="mt-2">
            {uploadRes.map((res) => (
              <a
                key={res.url}
                className="mt-2 block underline"
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {res.filename}
              </a>
            ))}
          </div>
        )} */}
    </div>
  );
}
