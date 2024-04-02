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
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Tasks_ComboBox = ({ setHidden, setSelectedTask, tasks }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setHidden(event.target.checked);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
          w-[160px] bg-slate-50 border border-slate-400
          sm:w-[180px]
          md:w-[200px]
          lg:w-[240px]
          xl:w-[240px]
          2xl:w-[250px]
          "
        >
          {value
            ? tasks.find((framework) => framework.value === value)?.label
            : "Select tasks..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="
        w-[250px] p-0
        sm:w-[250px] sm:p-0
        md:w-[250px] md:p-0
        lg:w-[250px] lg:p-0
        xl:w-[250px] xl:p-0
        2xl:w-[250px] 2xl:p-0
        "
      >
        <Command>
          <CommandInput placeholder="Search Tasks..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {/*   <input
              type="checkbox"
              name="archivedTask"
              onChange={handleChange}
            />

            <label for="archivedTask">Show Archived Tasks</label> */}
            {tasks.map((framework, index) => (
              <CommandItem
                key={index}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setSelectedTask(currentValue === value ? "" : framework.id);

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

export default Tasks_ComboBox;
