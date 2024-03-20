import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { useState } from "react";
import { addTasks } from "@/app/lib/actions/actions";
import { useToast } from "@/components/ui/use-toast";

export default function Form() {
  const { toast } = useToast();
  const [date, setDate] = useState(null);

  const [isNoDueDate, setisNoDueDate] = useState(false);
  return (
    <>
      <form
        action={async (formData) => {
          const add_Tasks = await addTasks(formData, date);

          if (add_Tasks) {
            toast({
              description: "Successfully added task.",

              variant: "default",
            });
          }
        }}
      >
        <div className="flex flex-col w-full">
          <div 
            className="
            flex flex-col text-3xl
            sm:flex sm:flex-col sm:text-3xl
            md:flex md:flex-col md:text-3xl
            lg:flex lg:flex-col lg:text-3xl
            xl:flex xl:flex-col xl:text-3xl
            2xl:flex 2xl:flex-col 2xl:text-3xl
            ">
            <Label className="text-2xl text-start font-semibold">Title</Label>
            <Input
              name="titleInput"
              className="
              my-1 h-16 text-xl bg-slate-200 w-full                 
              sm:my-3 sm:h-16 sm:text-xl sm:bg-slate-200 
              md:my-3 md:h-16 md:text-xl md:bg-slate-200 
              lg:my-3 lg:h-16 lg:text-xl lg:g-slate-200 
              xl:my-3 xl:h-16 xl:text-xl xl:bg-slate-200 
              2xl:my-3 2xl:h-16 2xl:text-xl 2xl:bg-slate-200 
              "
              type="text"
              placeholder=""
            />
            <Label className="text-2xl text-start font-semibold mt-4">Instructions</Label>
            <textarea
              name="instructionInput"
              className="
              h-48 text-lg border rounded-lg resize-none bg-slate-200 w-full
              "
              type="text"
              placeholder=""
            />
            <div className="flex flex-row my-4">
              <input
                name="isNoDueDateBox"
                type="checkbox"
                onChange={(e) => setisNoDueDate(e.target.checked)}
                checked={isNoDueDate}
              />
              <label
                htmlFor="terms"
                onChange={(e) => {
                  setisNoDueDate(e.target.checked);
                }}
                className="mx-2 text-lg peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                No Due Date?
              </label>
            </div>
            {!isNoDueDate && (
              <div className="flex flex-col justify-start ">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "bg-slate-200 my-4 w-full sm:w-full md:w-full lg:w-full xl:w-[310px] 2xl:w-[310px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-6 w-6" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="text-xl w-auto p-4">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <input
                  name="time"
                  type="time"
                  className="bg-slate-200 w-full sm:w-[350px] md:w-[430px] lg:w-[360px] 2xl:w-[310px] border border-black text-xl rounded-lg cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-8">
          <div 
            className="
            flex justify-center items-center w-[40%] h-8 text-white font-semibold bg-[#AD5606] rounded-lg
            sm:flex sm:justify-center sm:items-center sm:w-[40%] sm:h-8 sm:text-white sm:font-semibold sm:bg-[#AD5606] sm:rounded-lg
            md:flex md:justify-center md:items-center md:w-[40%] md:h-8 md:text-white md:font-semibold md:bg-[#AD5606] md:rounded-lg
            lg:flex lg:justify-center lg:items-center lg:w-[40%] lg:h-8 lg:text-white lg:font-semibold lg:bg-[#AD5606] lg:rounded-lg
            xl:flex xl:justify-center xl:items-center xl:w-[40%] xl:h-8 xl:text-white xl:font-semibold xl:bg-[#AD5606] xl:rounded-lg
            2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-[30%] 2xl:h-10 2xl:text-white 2xl:font-semibold 2xl:bg-[#AD5606] 2xl:rounded-lg
            ">
            <Button
              type="submit"
              className="text-2xl rounded-lg"
              variant="primary"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
