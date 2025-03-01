'use client';

import { Button } from "@workspace/ui/components/button"
import { useToast } from "@workspace/ui/hooks/use-toast"

export default function Page() {
  const toast = useToast()
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World from web</h1>
        <Button size="sm">Button</Button>
      </div>
      <Button
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
    </div>
  )
}
