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
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Instructor_ComboBox({ instructorFrameworks }) {
    const transformInstructor = instructorFrameworks.map(item=>({
        label: item.name,
        value: item.email,
    }))
    const [openInstructor, setOpenInstructor] = useState(false);
    const [valueInstructor, setValueInstructor] = useState("");

    return (
        <div className="dropdown">
            <Popover open={openInstructor} onOpenChange={setOpenInstructor}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openInstructor}
                        className="text-2xl font-bold w-[250px] cursor-pointer md:left-[1250px] bg-[#AD5606]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                    >
                        {valueInstructor
                            ? transformInstructor.find(
                                (framework) => framework.value === valueInstructor
                            )?.label
                            : "Select instructor..."}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Command>
                        <CommandInput
                            placeholder="Search instructor..."
                            className="h-9"
                        />
                        <CommandEmpty>No instructor found.</CommandEmpty>
                        <CommandGroup>
                            {transformInstructor.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValueInstructor(
                                            currentValue === valueInstructor ? "" : currentValue
                                        );
                                        setOpenInstructor(false);
                                    }}
                                >
                                    {framework.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            valueInstructor === framework.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
