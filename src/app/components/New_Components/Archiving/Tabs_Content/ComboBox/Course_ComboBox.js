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

export default function Course_ComboBox({ programFrameworks }) {
    const [openCourse, setOpenCourse] = useState(false);
    const [valueCourse, setValueCourse] = useState("");
    return (
        <div className="dropdown">
            <Popover open={openCourse} onOpenChange={setOpenCourse}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openCourse}
                        className="text-xl font-semibold w-[280px] cursor-pointer md:left-[1250px] bg-[#AD5606]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                    >
                        {valueCourse
                            ? programFrameworks.find(
                                (framework) => framework.value === valueCourse
                            )?.label
                            : "Select program..."}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Command>
                        <CommandInput placeholder="Search program..." className="h-9" />
                        <CommandEmpty>No program found.</CommandEmpty>
                        <CommandGroup>
                            {programFrameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValueCourse(
                                            currentValue === valueCourse ? "" : currentValue
                                        );
                                        setOpenCourse(false);
                                    }}
                                >
                                    {framework.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            valueCourse === framework.value
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
