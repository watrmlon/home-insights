import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <main className="p-24">
      <h1 className="text-3xl font-medium mb-4">
        Shadcn/ui &mdash; Build your own components.
      </h1>
      <Button>
        <Search className="w-5 h-5 mr-2" />
        Search rooms
      </Button>
    </main>
  );
}
