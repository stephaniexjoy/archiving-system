import {
  flexRender,
  SortingState,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";
import { Input } from "@/components/ui/input";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";

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

const programs = [
  {
    value: "machine learning",
    label: "Machine Learning",
  },
  {
    value: "programming languages",
    label: "Programming Languages",
  },
  {
    value: "platform technologies",
    label: "Platform Technologies",
  },
];

const filetypes = [
  {
    value: "pdf",
    label: "PDF",
  },
  {
    value: "ppt",
    label: "PPT",
  },
  {
    value: "docx",
    label: "DOCX",
  },
];

export function ComboboxPermission({ value, onChange }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
          w-[200px] sm:w-auto md:w-auto lg:w-auto justify-between
          2xl:w-[200px] 2xl:justify-between
          "
        >
          {value
            ? permissions.find((framework) => framework.value === value)?.label
            : "Select permissions..."}


          <CaretSortIcon className="-ml-1 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {permissions.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  onChange(currentValue === value ? "" : currentValue);
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
}

export function ComboboxMaterial({ value, onChange, materials }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
          w-[200px] 
          sm:[200px]
          md:[200px]
          lg:[200px]
          xl:[200px]
          2xl:[200px]
          "
        >
          {value
            ? materials.find((framework) => framework.value === value)?.label
            : "Select material.."}
          <CaretSortIcon className="ml-5 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {materials.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  onChange(currentValue === value ? "" : currentValue);
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
}

export function ComboboxProgram({ value, onChange }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
          w-[200px]
          sm:w-[200px]
          md:w-[200px] 
          lg:w-[200px] 
          xl:w-[200px] 
          2xl:w-[200px] 
          "
        >
          {value
            ? programs.find((framework) => framework.value === value)?.label
            : "Select program.."}
          <CaretSortIcon className="ml-5 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {programs.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  onChange(currentValue === value ? "" : currentValue);
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
}

export function ComboboxInstructor({ value, onChange, instructors }) {
  const [open, setOpen] = React.useState(false);
  const transformInstructor = instructors.map((item) => ({
    label: item.name,
    value: item.email,
  }));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
          w-[200px] justify-between
          sm:w-[200px] 
          md:w-[200px] 
          lg:w-[200px] 
          xl:w-[200px] 
          2xl:w-[200px] 
          "
        >
          {value
            ? transformInstructor.find((framework) => framework.value === value)
                ?.label
            : "Select instructor.."}
          <CaretSortIcon className="ml-3 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {transformInstructor.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  onChange(currentValue === value ? "" : currentValue);
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
}

export function ComboboxFileType({ value, onChange }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
          w-[200px] 
          sm:w-[200px] 
          md:w-[200px]  
          lg:w-[200px] 
          xl:w-[200px]
          2xl:w-[200px]  
          "
        >
          {value
            ? filetypes.find((framework) => framework.value === value)?.label
            : "Select file type..."}
          <CaretSortIcon className="ml-5 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {filetypes.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  onChange(currentValue === value ? "" : currentValue);
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
}

export default function Date_Range({ className }) {
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <div className={cn("grid gap-2 ", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "text-sm w-[200px] sm:w-auto md:w-auto lg:w-auto 2xl:w-[200px] cursor-pointer md:left-[1250px] h-[40px] rounded-sm px-0 py-1",
              !date
            )}
          >
            <CalendarIcon className="-mt-1 mr-2 h-4 w-4 " />
            {date?.from ? (
              date.to ? (
                <>
               
               <span className="text-[11px] font-bold">{format(date.from, "LLL dd, y")}</span> -{" "}
            <span className="text-[11px] font-bold">{format(date.to, "LLL dd, y")}</span>
                 
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
              
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="text-black w-auto p-0" align="start">
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
  );
}

export function DataTable({ columns, data, materials, instructors }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const handleFilenameClick = (filePath) => {
    window.location.href = filePath;
  };

  const handleComboBoxFileTypeChange = (value) => {
    table.getColumn("filename")?.setFilterValue(value);
  };

  const handleComboBoxPermissionChange = (value) => {
    table.getColumn("fileRole")?.setFilterValue(value);
  };

  const handleComboBoxProgramChange = (value) => {
    table.getColumn("filename")?.setFilterValue(value);
  };

  const handleComboBoxMaterialChange = (value) => {
    table.getColumn("fileMaterial")?.setFilterValue(value);
  };

  const handleComboBoxInstructorChange = (value) => {
    table.getColumn("uploaderName")?.setFilterValue(value);
  };

  const handleComboBoxDateRangeChange = (value) => {
    table.getColumn("uploadDate")?.setFilterValue(value);
  };

  return (
    <>
      <div
        className="
        grid flex-col items-center py-4 space-y-4
        sm:grid sm:flex-col sm:items-center sm:py-4 sm:space-y-4
        md:grid md:flex-col md:items-center md:py-4 md:space-y-4
        lg:grid lg:flex-col lg:items-center lg:py-4 lg:space-y-4
        xl:flex-col xl:items-center xl:py-4 xl:space-x-1
        2xl:flex-col 2xl:items-center 2xl:py-4 2xl:space-x-1"
        >
        <Input
          placeholder="Filter Filename..."
          value={table.getColumn("filename")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("filename")?.setFilterValue(event.target.value)
          }
          className="
          max-w-full mt-10
          sm:max-w-full
          md:max-w-full  
          lg:max-w-lg  
          xl:max-w-xl     
          2xl:max-w-2xl
          "
        />
        <div 
          className="
          grid grid-cols-2 gap-x-2 w-full
          sm:grid sm:grid-cols-2 sm:gap-x-2 sm:w-full
          md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-0 md:w-full
          lg:grid lg:grid-cols-7 lg:gap-x-2 lg:w-full
          xl:grid xl:grid-cols-7 xl:gap-x-2 xl:w-full
          2xl:grid 2xl:grid-cols-7 2xl:gap-x-2 2xl:w-full
          ">
          <ComboboxPermission 
            value={table.getColumn("fileRole")?.getFilterValue() ?? ""}
            onChange={handleComboBoxPermissionChange}
          />
          <ComboboxMaterial
            value={table.getColumn("fileMaterial")?.getFilterValue() ?? ""}
            onChange={handleComboBoxMaterialChange}
            materials={materials}
          />
          <ComboboxProgram
            value={table.getColumn("filename")?.getFilterValue() ?? ""}
            onChange={handleComboBoxProgramChange}
          />
          <ComboboxInstructor
            value={table.getColumn("uploaderName")?.getFilterValue() ?? ""}
            onChange={handleComboBoxInstructorChange}
            instructors={instructors}
          />
          <ComboboxFileType
            value={table.getColumn("filename")?.getFilterValue() ?? ""}
            onChange={handleComboBoxFileTypeChange}
          />
          <Date_Range
            value={table.getColumn("uploadDate")?.getFilterValue() ?? ""}
            onChange={handleComboBoxDateRangeChange}
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-[#5B0505] ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-white">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.column.id === "filename" ? (
                        <a
                          href="#"
                          onClick={() =>
                            handleFilenameClick(row.original.filePath)
                          }
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </a>
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
