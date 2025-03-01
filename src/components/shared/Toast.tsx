import { toaster } from "@/components/ui/toaster";

export default function Toastify(title: string, status: string) {
  toaster.create({
    title: title,
    type: status,
    placement: "bottom-end",
  });
}
