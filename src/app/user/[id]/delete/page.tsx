import { Button } from "@/components/ui/button";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";

interface DeleteUserPageProps {
  params: {
    id: string;
  };
}

export default function DeleteUserPage({ params }: DeleteUserPageProps) {
  const { id } = params;

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-neutral-950">
      <GlassmorphNavBar />
      <div className="flex flex-col gap-5">
        Are you sure you want to delete Users Data?
        <Button variant="destructive" className="bg-[#5f0000]">Delete Users Data</Button>
      </div>
    </div>
  );
}
