import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const permissions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "secretary",
    label: "Secretary",
  },
];

const Permission_ComboBox = ({ setPermission }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
          w-[200px] justify-between
          2xl:w-[200px] 2xl:justify-between
          "
        >
          {value
            ? permissions.find((framework) => framework.value === value)?.label
            : "Select permissions..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="
      w-[200px] p-0
      2xl:w-[200px] 2xl:p-0
      ">
        <Command>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {permissions.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setPermission(currentValue === value ? "" : framework.label);
                  setOpen(false);
                }}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Permission_ComboBox;
