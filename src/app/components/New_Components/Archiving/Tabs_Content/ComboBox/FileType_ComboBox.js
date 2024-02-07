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

export default function FileType_ComboBox({ filetypeFrameworks }) {
    const [openFiletype, setOpenFiletype] = useState(false);
    const [valueFiletype, setValueFiletype] = useState("");
    return (
        <div className="dropdown">
            <Popover open={openFiletype} onOpenChange={setOpenFiletype}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openFiletype}
                        className="text-xl font-semibold w-[280px] cursor-pointer md:left-[1250px] bg-[#AD5606]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                    >
                        {valueFiletype
                            ? filetypeFrameworks.find(
                                (framework) => framework.value === valueFiletype
                            )?.label
                            : "Select File Type..."}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Command>
                        <CommandInput
                            placeholder="Search file type..."
                            className="h-9"
                        />
                        <CommandEmpty>No file type found.</CommandEmpty>
                        <CommandGroup>
                            {filetypeFrameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValueFiletype(
                                            currentValue === valueFiletype ? "" : currentValue
                                        );
                                        setOpenFiletype(false);
                                    }}
                                >
                                    {framework.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            valueFiletype === framework.value
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
