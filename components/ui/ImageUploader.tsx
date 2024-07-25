import React, { useState } from "react";
import Image from "next/image";

interface ImageUploaderProps {
  height: string;
  width: string;
  placeholderImage?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  height,
  width,
  placeholderImage,
}) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="relative w-full flex justify-center">
      <div
        className={`relative flex items-center justify-center border-2 rounded-lg overflow-hidden ${
          image || placeholderImage
            ? "border-none"
            : "border-dashed-custom border-[#95BEFE]"
        } hover:bg-[#EBEDEE] cursor-pointer`}
        style={{ height, width }}
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="object-cover h-full w-full rounded-lg"
            />
          ) : (
            placeholderImage && (
              <div
                className="object-cover h-full w-full rounded-lg"
                style={{
                  backgroundImage: `url(${placeholderImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )
          )}
          {image && (
            <div
              onClick={handleRemoveImage}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <div className="bg-[#EBEDEE] rounded-full p-1">
                <Image
                  src="/assets/icons/thrashIcon.svg"
                  alt="remove icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          )}
        </div>
        {!image && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/assets/icons/attachIcon.svg"
              alt="attach icon"
              width={24}
              height={24}
              className="mx-auto my-auto"
            />
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
