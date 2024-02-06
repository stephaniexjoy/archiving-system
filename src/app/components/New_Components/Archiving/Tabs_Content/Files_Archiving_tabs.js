"use client";
import { useState } from "react";
import FileTable from "@/app/components/FileTable";
import UploadModal from "@/app/components/Modal/UploadModal";
import AddCategory_Dialog from "@/app/components/New_Components/AddCategory_Dialog/AddCategory_Dialog";
import SearchBar from "@/app/components/SearchBar";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
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
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

const materialFrameworks = [
  {
    value: "learning materials",
    label: "Learning Materials",
  },
  {
    value: "Training and Seminar",
    label: "Training and Seminar",
  },
  {
    value: "Research Conducted",
    label: "Research Conducted",
  },
  {
    value: "Extension Conducted",
    label: "Extension Conducted",
  },
  {
    value: "Educational Qualification",
    label: "Educational Qualification",
  },
  {
    value: "Faculty Profile",
    label: "Faculty Profile",
  },
];

const programFrameworks = [
  {
    value: "Machine Learning",
    label: "Machine Learning",
  },
  {
    value: "Programming Languages",
    label: "Programming Languages",
  },
  {
    value: "Platform Technologies",
    label: "Platform Technologies",
  },
];

const instructorFrameworks = [
  {
    value: "Prince Andres",
    label: "Prince Andres",
  },
  {
    value: "John Ryan Ual",
    label: "John Ryan Ual",
  },
  {
    value: "Marco Del Rosario",
    label: "Marco Del Rosario",
  },
];

const filetypeFrameworks = [
  {
    value: "PDF",
    label: "PDF",
  },
  {
    value: "PPT",
    label: "PPT",
  },
  {
    value: "DOCX",
    label: "DOCX",
  },
];

export default function Files_Archiving_tabs({
  children,
  dataWithFormattedDate,
  className,
}) {
  const [openMaterial, setOpenMaterial] = useState(false);
  const [valueMaterial, setValueMaterial] = useState("");
  const [openProgram, setOpenProgram] = useState(false);
  const [valueProgram, setValueProgram] = useState("");
  const [openInstructor, setOpenInstructor] = useState(false);
  const [valueInstructor, setValueInstructor] = useState("");
  const [openFiletype, setOpenFiletype] = useState(false);
  const [valueFiletype, setValueFiletype] = useState("");

  const [date, setDate] = React.useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <>
      <div className="flex flex-row mt-5 md:h-20 px-10">
        <h1 className="text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 mr-[1%]">
          FIND
        </h1>
        <SearchBar />
        <UploadModal />
      </div>

      <div className="flex flex-row ml-28 gap-x-36">
        <AddCategory_Dialog />
        <AddCategory_Dialog />
      </div>

      <div className="flex flex-row font-semibold text-[#5B0505] px-10">
        <div className="ml-36 inline-block text-[20px] md:text-[23px]">
          MATERIAL
        </div>
        <div className="ml-56 inline-block text-[20px] md:text-[23px]">PROGRAM</div>
        <div className="ml-52 inline-block text-[20px] md:text-[23px]">
          INSTRUCTOR
        </div>
        <div className="ml-52 inline-block text-[20px] md:text-[23px]">FILE TYPE</div>
        <div className="ml-60 inline-block text-[20px] md:text-[23px]">SORT BY</div>
      </div>

      <div className="flex flex-row gap-x-24 ml-16 px-10">
        <div className="dropdown">
          <Popover open={openMaterial} onOpenChange={setOpenMaterial}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openMaterial}
                className="text-2xl font-bold w-[250px] cursor-pointer md:left-[1250px] bg-[#AD5606]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
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

        <div className="dropdown">
          <Popover open={openProgram} onOpenChange={setOpenProgram}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openProgram}
                className="text-2xl font-bold w-[250px] cursor-pointer md:left-[1250px] bg-[#AD5606]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
              >
                {valueProgram
                  ? programFrameworks.find(
                    (framework) => framework.value === valueProgram
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
                        setValueProgram(
                          currentValue === value ? "" : currentValue
                        );
                        setOpenProgram(false);
                      }}
                    >
                      {framework.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          valueProgram === framework.value
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
                  ? instructorFrameworks.find(
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
                  {instructorFrameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValueInstructor(
                          currentValue === value ? "" : currentValue
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

        <div className="dropdown">
          <Popover open={openFiletype} onOpenChange={setOpenFiletype}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openFiletype}
                className="text-2xl font-bold w-[250px] cursor-pointer md:left-[1250px] bg-[#AD5606]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
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
                          currentValue === value ? "" : currentValue
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

        <div className={cn("grid gap-2", className)}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "text-black bg-[#AD5606] backdrop-filter-blur-[4px] w-[250px] h-[50px] cursor-pointer",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="text-[23px] w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="w-full px-10">
        <FileTable data={dataWithFormattedDate} />
      </div>
    </>
  );
}
