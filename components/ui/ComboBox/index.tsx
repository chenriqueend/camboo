"use client";
import React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type PropsType = {
  placeholderLabel?: string;
  entries: {
    label: string;
    value: string;
  }[];
  className?: string;
  disabled?: boolean;
  onSelect?: (value: string) => void;
  defaultValue?: string;
};
export default function ComboBox({
  entries,
  placeholderLabel,
  className,
  disabled,
  onSelect,
  defaultValue,
}: PropsType) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const _placeholderLabel = placeholderLabel || "registro";
  const comboWidth = "w-[450px]";

  const [refs, refsSet] = React.useState<any>({});
  const [isVisible, isVisibleSet] = React.useState(false);

  React.useEffect(() => {
    const refs = entries.reduce((acc, item, idx) => {
      acc[idx] = React.createRef<HTMLDivElement>();
      return acc;
    }, {} as any);

    refsSet(refs);

    setTimeout(() => {
      setOpen(false);
      isVisibleSet(true);
    }, 100);
  }, []);

  React.useEffect(() => {
    setValue("");
  }, [defaultValue]);

  React.useEffect(() => {
    onSelect && onSelect(value);
  }, [value]);

  const moveToTop = React.useCallback(() => {
    const foundIndx = entries.findIndex(
      (item) => item.value.toLocaleLowerCase() === value.toLocaleLowerCase()
    );

    if (foundIndx !== -1) {
      if (refs[foundIndx]) {
        setTimeout(() => {
          // console.log("refs[foundIndx].current", refs[foundIndx].current);
          refs[foundIndx].current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }, 5);
      }
    }
  }, [value, refs]);

  // if (!isVisible) return null;

  return (
    <div className={cn({ "cursor-not-allowed": disabled })}>
      <Popover defaultOpen open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          asChild
          onClick={() => {
            moveToTop();
          }}
        >
          <Button
            disabled={disabled}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("justify-between", comboWidth, className)}
          >
            {value
              ? entries.find(
                  (el) =>
                    el.value.toLocaleLowerCase() === value.toLocaleLowerCase()
                )?.label
              : `Selecione ${_placeholderLabel}...`}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("p-0", comboWidth, className)}>
          <Command>
            <CommandInput
              placeholder={`Busque ${_placeholderLabel}...`}
              className="h-9"
            />
            <CommandEmpty>Nenhum {_placeholderLabel} encontrado.</CommandEmpty>
            <CommandGroup className="max-h-[200px] overflow-y-scroll">
              {entries.map((el, idx) => (
                <div ref={refs[idx]} key={el.value}>
                  <CommandItem
                    key={el.value}
                    value={el.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {el.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value.toLocaleLowerCase() ===
                          el.value.toLocaleLowerCase()
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                </div>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
