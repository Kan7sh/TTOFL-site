"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  id: string;
  token: string;
}

export default function DeleteUserClient({ id, token }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleConfirmDelete() {
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const baseURL = process.env.DELETE_USER_BASE_URL;
      const url = `${baseURL}/user/${id}/delete`;
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          token: token,
        },
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to delete user");
      }

      setSuccessMsg("User deleted successfully.");
      setOpen(false);
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive" className="bg-red-500">
            Delete User Data
          </Button>
        </DialogTrigger>

        <DialogContent className="border-gray-500">
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>This action cannot be undone.</DialogDescription>
          </DialogHeader>

          <div className="flex justify-end mt-4 gap-3">
            <Button onClick={() => setOpen(false)} disabled={loading} className="bg-gray-500">
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
              disabled={loading}
              className="bg-red-500"
            >
              {loading ? "Deleting..." : "Yes, Delete"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {successMsg && <p className="text-green-400 text-sm">{successMsg}</p>}
      {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}
    </div>
  );
}
