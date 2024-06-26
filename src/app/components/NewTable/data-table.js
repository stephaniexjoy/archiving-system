import {
  flexRender,
  SortingState,
  ColumnFiltersState,
  getCoreRowModel,
  getPaginationRowModel,
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
  CommandInput,
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

/* const programs = [
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
]; */

export function ComboboxPermission({ value, onChange, permissions }) {
  const [open, setOpen] = React.useState(false);
  console.log("Value ng permission ", value);
  const transformPermissions = permissions.map((item) => ({
    label: item.label,
    value: item.value,
  }));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
          w-full bg-slate-50 border border-slate-400
          sm:w-full
          md:full
          lg:w-full
          xl:w-full
          2xl:w-full
          "
        >
          {value
            ? transformPermissions.find(
                (framework) => framework.value === value
              )?.label
            : "Select permissions.."}

          <CaretSortIcon
            className="
            ml-2 h-4 w-4 shrink-0 opacity-50
            sm:ml-20 sm:h-4 sm:w-4 sm:shrink-0 sm:opacity-50
            md:ml-16 md:h-4 md:w-4 md:shrink-0 md:opacity-50
            lg:ml-20 lg:h-4 lg:w-4 lg:shrink-0 lg:opacity-50
            xl:ml-1 xl:h-4 xl:w-4 xl:shrink-0 xl:opacity-50
            2xl:-ml-1 2xl:h-4 2xl:w-4 2xl:shrink-0 2xl:opacity-50
            "
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="
        w-[170px] p-0
        sm:w-[300px] sm:p-0
        md:w-[240px] md:p-0
        lg:w-[300px] lg:p-0
        xl:w-[190px]
        2xl:w-[250px] 2xl:p-0
        "
      >
        <Command>
          <CommandInput placeholder="Search Permission..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {transformPermissions.map((framework) => (
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
          w-full bg-slate-50 border border-slate-400
          sm:w-full
          md:w-full
          lg:w-full
          xl:w-full
          2xl:w-full
          "
        >
          {value
            ? materials.find((framework) => framework.value === value)?.label
            : "Select material.."}
          <CaretSortIcon
            className="
            ml-8 h-4 w-4 shrink-0 opacity-50           
            sm:ml-24 sm:h-4 sm:w-4 sm:shrink-0 sm:opacity-50
            md:ml-24 md:h-4 md:w-4 md:shrink-0 md:opacity-50
            lg:ml-28 lg:h-4 lg:w-4 lg:shrink-0 lg:opacity-50
            xl:ml-5 xl:h-4 xl:w-4 xl:shrink-0 xl:opacity-50
            2xl:ml-5 2xl:h-4 2xl:w-4 2xl:shrink-0 2xl:opacity-50

            "
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="
        w-[170px] p-0
        sm:w-[300px] sm:p-0
        md:w-[240px] md:p-0
        lg:w-[300px] lg:p-0
        xl:w-[190px] xl:p-0
        2xl:w-[250px] 2xl:p-0
        "
      >
        <Command>
          <CommandInput placeholder="Search Material..." className="h-9" />
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

export function ComboboxProgram({ value, onChange, programs }) {
  const [open, setOpen] = React.useState(false);

  console.log("list of programs", programs);
  console.log("list of programs", value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
          w-full bg-slate-50 border border-slate-400
          sm:w-full
          md:w-full
          lg:w-full
          xl:w-full
          2xl:w-full
          "
        >
          {value
            ? programs.find(
                (framework) =>
                  framework.value.toLowerCase() === value.toLowerCase()
              )?.label
            : "Select program.."}
          <CaretSortIcon
            className="
            ml-8 h-4 w-4 shrink-0 opacity-50
            sm:ml-24 sm:h-4 sm:w-4 sm:shrink-0 sm:opacity-50
            md:ml-24 md:h-4 md:w-4 md:shrink-0 md:opacity-50
            lg:ml-24 lg:h-4 lg:w-4 lg:shrink-0 lg:opacity-50
            xl:ml-5 xl:h-4 xl:w-4 xl:shrink-0 xl:opacity-50
            2xl:-ml-1 2xl:h-4 2xl:w-4 2xl:shrink-0 2xl:opacity-50
            "
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="
        w-[170px] p-0
        sm:w-[300px] sm:p-0
        md:w-[240px] md:p-0
        lg:w-[300px] lg:p-0
        xl:w-[190px] xl:p-0
        2xl:w-[250px] 2xl:p-0
        "
      >
        <Command>
          <CommandInput placeholder="Search Program..." className="h-9" />
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
    value: item.name,
  }));

  console.log("Value ng ins", value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
          w-full bg-slate-50 border border-slate-400
          sm:w-full
          md:w-full
          lg:w-full
          xl:w-full
          2xl:w-full
          "
        >
          {value
            ? transformInstructor.find(
                (framework) =>
                  framework.value.toLowerCase() === value.toLowerCase()
              )?.label
            : "Select instructor.."}
          <CaretSortIcon
            className="
            ml-6 h-4 w-4 shrink-0 opacity-50
            sm:ml-24 sm:h-4 sm:w-4 sm:shrink-0 sm:opacity-50
            md:ml-24 md:h-4 md:w-4 md:shrink-0 md:opacity-50
            lg:ml-24 lg:h-4 lg:w-4 lg:shrink-0 lg:opacity-50
            xl:ml-5 xl:h-4 xl:w-4 xl:shrink-0 xl:opacity-50
            2xl:-ml-1 2xl:h-4 2xl:w-4 2xl:shrink-0 2xl:opacity-50
            "
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="
        w-[170px] p-0
        sm:w-[300px] sm:p-0
        md:w-[240px] md:p-0
        lg:w-[300px] lg:p-0
        xl:w-[190px] xl:p-0
        2xl:w-[250px] 2xl:p-0
        "
      >
        <Command>
          <CommandInput placeholder="Search Instructor..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {transformInstructor.map((framework, index) => (
              <CommandItem
                key={index}
                value={framework.value}
                onSelect={(currentValue) => {
                  console.log(currentValue);
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

export function ComboboxFileType({ value, onChange, filetype }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="
          w-full bg-slate-50 border border-slate-400
          sm:w-full
          md:w-full
          lg:w-full
          xl:w-full
          2xl:w-full
          "
        >
          {value
            ? filetype.find((framework) => framework.value === value)?.label
            : "Select file type..."}
          <CaretSortIcon
            className="
            ml-8 h-4 w-4 shrink-0 opacity-50
            sm:ml-24 sm:h-4 sm:w-4 sm:shrink-0 sm:opacity-50
            md:ml-24 md:h-4 md:w-4 md:shrink-0 md:opacity-50
            lg:ml-24 lg:h-4 lg:w-4 lg:shrink-0 lg:opacity-50
            xl:ml-4 xl:h-4 xl:w-4 xl:shrink-0 xl:opacity-50
            2xl:-ml-1 2xl:h-4 2xl:w-4 2xl:shrink-0 2xl:opacity-50
            "
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="
        w-[170px] p-0
        sm:w-[300px] sm:p-0
        md:w-[240px] md:p-0
        lg:w-[300px] lg:p-0
        xl:w-[190px] xl:p-0
        2xl:w-[250px] 2xl:p-0
        "
      >
        <Command>
          <CommandInput placeholder="Search File Type..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {filetype.map((framework) => (
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

export default function Date_Range({ value, className, setDate1 }) {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  const handleDateSelect = (newDate) => {
    setDate(newDate);
    newDate; // Set date using setDate1 function
  };
  return (
    <div className={cn("grid gap-10 ", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "bg-slate-50 border border-slate-400 text-[5px] w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full cursor-pointer h-[40px] rounded-sm px-0 py-1",
              !date
            )}
          >
            <CalendarIcon className="-mt-0.5 mr-1 h-5 w-5 sm:-mt-0.5 sm:h-8 sm:w-8 2xl:h-[10px] 2xl:w-[10px]" />
            {date?.from ? (
              date.to ? (
                <>
                  <span className="text-[11px] font-bold">
                    {format(date.from, "LLL dd, y")}
                  </span>{" "}
                  -{" "}
                  <span className="text-[11px] font-bold">
                    {format(date.to, "LLL dd, y")}
                  </span>
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
            onSelect={handleDateSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function DataTable({
  columns,
  data,
  materials,
  instructors,
  programs,
  filetype,
}) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [date1, setDate1] = useState({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  console.log(filetype);

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    state: {
      sorting,
      columnFilters,
    },
  });

  const handleFilenameClick = (filePath) => {
    window.location.href = filePath;
  };

  const handleComboBoxFileTypeChange = (value) => {
    table.getColumn("fileType")?.setFilterValue(value);
  };

  const handleComboBoxPermissionChange = (value) => {
    table.getColumn("fileRole")?.setFilterValue(value);
  };

  const handleComboBoxProgramChange = (value) => {
    table.getColumn("fileProgram")?.setFilterValue(value);
  };

  const handleComboBoxMaterialChange = (value) => {
    table.getColumn("fileMaterial")?.setFilterValue(value);
  };

  const handleComboBoxInstructorChange = (value) => {
    table.getColumn("uploaderName")?.setFilterValue(value);
  };

  const handleComboBoxDateRangeChange = (date1) => {
    table.getColumn("uploadDate")?.setFilterValue();
    console.log(date1);
  };

  return (
    <>
      <div
        className="
        grid flex-col items-center py-4 space-y-2
        sm:grid sm:flex-col sm:items-center sm:py-4 sm:space-y-4
        md:grid md:flex-col md:items-center md:py-4 md:space-y-4
        lg:grid lg:flex-col lg:items-center lg:py-4 lg:space-y-4
        xl:flex-col xl:items-center xl:py-4 xl:space-x-0 xl:gap-x-10
        2xl:flex-col 2xl:items-center 2xl:py-2 2xl:space-x-0 
        "
      >
        <Input
          placeholder="Filter Filename..."
          value={table.getColumn("filename")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("filename")?.setFilterValue(event.target.value)
          }
          className="
          max-w-full  bg-slate-50 border border-slate-400
          sm:max-w-full
          md:max-w-full  
          lg:max-w-lg  
          xl:max-w-xl     
          2xl:max-w-3xl 
          "
        />
        <div
          className="
          grid grid-cols-2 grid-rows-3 gap-y-2 gap-x-2 w-full
          sm:grid sm:grid-cols-2 sm:gap-x-2 sm:w-full
          md:grid md:grid-cols-3 md:grid-rows-2 md:w-full md:h-auto md:items-center md:justify-center md:text-center
          lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:w-full lg:h-auto lg:items-center lg:justify-center lg:text-center
          xl:flex xl:grid-cols-7 xl:gap-x-6 xl:w-full xl:h-auto xl:items-center xl:justify-center xl:text-center
          2xl:flex 2xl:grid-cols-7 2xl:w-auto 2xl:gap-x-6 2xl:h-auto
          "
        >
          <ComboboxPermission
            value={table.getColumn("fileRole")?.getFilterValue() ?? ""}
            onChange={handleComboBoxPermissionChange}
            permissions={permissions}
          />
          <ComboboxMaterial
            value={table.getColumn("fileMaterial")?.getFilterValue() ?? ""}
            onChange={handleComboBoxMaterialChange}
            materials={materials}
          />
          <ComboboxProgram
            value={table.getColumn("fileProgram")?.getFilterValue() ?? ""}
            onChange={handleComboBoxProgramChange}
            programs={programs}
          />
          <ComboboxInstructor
            value={table.getColumn("uploaderName")?.getFilterValue() ?? ""}
            onChange={handleComboBoxInstructorChange}
            instructors={instructors}
          />
          <ComboboxFileType
            value={table.getColumn("fileType")?.getFilterValue() ?? ""}
            onChange={handleComboBoxFileTypeChange}
            filetype={filetype}
          />
          {/*  <Date_Range
            value={date1 ?? "test"}
            setDate1={setDate1}
            onSelect={() => {
              console.log("nagbago kana");
            }}
          /> */}
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
          <TableBody className="bg-white">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-start">
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
      <div className="flex items-center justify-end space-x-2 py-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  );
}
