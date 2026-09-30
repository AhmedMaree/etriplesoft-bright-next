import { MessageCircle } from "lucide-react";
import { company } from "@/lib/company";

export function WhatsAppButton({
  label = "Chat with ETripleSoft on WhatsApp",
  title = "Chat on WhatsApp",
}: {
  label?: string;
  title?: string;
}) {
  return (
    <a
      className="whatsapp-float"
      href={company.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={title}
    >
      <MessageCircle aria-hidden="true" />
    </a>
  );
}
