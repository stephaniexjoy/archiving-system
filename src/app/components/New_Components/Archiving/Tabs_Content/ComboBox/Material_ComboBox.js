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



export default function Material_ComboBox({ materialFrameworks }) {
    console.log(materialFrameworks)
    const [openMaterial, setOpenMaterial] = useState(false);
    const [valueMaterial, setValueMaterial] = useState("");
    return (
        <div className="dropdown">
            <Popover open={openMaterial} onOpenChange={setOpenMaterial}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openMaterial}
                        className="text-xl font-semibold w-[280px] cursor-pointer md:left-[1250px] bg-[#AD5606]  h-[40px] overflow-hidden shadow-lg rounded-sm px-2 py-1 "
                    >
                        {valueMaterial
                            ? materialFrameworks.find(
                                (framework) => framework.value === valueMaterial
                            )?.label
                            : "Select material..."}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Command>
                        <CommandInput
                            placeholder="Search material..."
                            className="h-9"
                        />
                        <CommandEmpty>No material found.</CommandEmpty>
                        <CommandGroup>
                            {materialFrameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValueMaterial(
                                            currentValue === valueMaterial ? "" : currentValue
                                        );
                                        console.log(valueMaterial)
                                        setOpenMaterial(true);
                                    }}
                                >
                                    {framework.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            valueMaterial === framework.value
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
