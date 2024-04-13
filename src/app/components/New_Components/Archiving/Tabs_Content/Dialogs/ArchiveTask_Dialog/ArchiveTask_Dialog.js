import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RiArchive2Fill } from "react-icons/ri";
import { archiveTask } from "@/app/lib/actions/actions";

export default function ArchiveTask_Dialog({ selectedTask }) {
  const handleButtonClick = async () => {
    await archiveTask(selectedTask);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive">
          <span>
            <RiArchive2Fill className="mr-2 h-4 w-4" />
          </span>
          Archive Task
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will archive the task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleButtonClick} className="bg-red-600">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
