import { getMaterials } from "@/app/lib/actions/actions";
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
import { useState, useEffect } from "react";

export default function Material_ComboBox({ setMaterial, refreshTrigger }) {
  const [openMaterial, setOpenMaterial] = useState(false);
  const [valueMaterial, setValueMaterial] = useState("");
  const [materialFrameworks, setMaterialFrameworks] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      const getMaterialsData = await getMaterials();
      setMaterialFrameworks(getMaterialsData);
    };

    fetchMaterials();
  }, [refreshTrigger]);

  console.log(materialFrameworks);
  return (
    <div className="dropdown">
      <Popover open={openMaterial} onOpenChange={setOpenMaterial}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openMaterial}
            className="
            w-[200px] justify-between
            2xl:w-[200px] 2xl:justify-between
            "
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
            <CommandInput placeholder="Search material..." className="h-9" />
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
                    setMaterial(
                      currentValue === valueMaterial ? "" : framework.label
                    );
                    console.log(valueMaterial);
                    setOpenMaterial(false);
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
  );
}
