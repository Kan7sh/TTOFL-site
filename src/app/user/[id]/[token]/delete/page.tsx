import DeleteUserClient from "@/components/ui/DeleteUserClient";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";

export default function DeleteUserPage({
  params,
}: {
  params: {
    id: string;
    token: string;
  };
}) {
  const { id, token } = params;

  return (
    <div className="relative min-h-screen w-full bg-neutral-950">
      <GlassmorphNavBar />

      <div className="flex flex-col items-center justify-center px-6 text-center mt-50 max-w-lg mx-auto">
        <h1 className="text-2xl font-semibold text-white">
          Confirm User Data Deletion
        </h1>

        <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
          You are initiating a request to permanently remove all personal data
          associated with this user from our system. This includes profile
          details, stored records, activity information, and any data linked to
          the user’s account.
        </p>

        <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
          Once deleted, this information{" "}
          <span className="text-red-400 font-medium">cannot be recovered</span>.
          Please review your action carefully before proceeding.
        </p>

        <div className="mt-8">
          <DeleteUserClient id={id} token={token} />
        </div>

        <p className="mt-10 text-xs text-neutral-500 max-w-sm leading-5">
          By continuing, you acknowledge that you understand the consequences of
          deleting all data tied to this user and confirm that the request is
          intentional and authorized.
        </p>
      </div>
    </div>
  );
}
