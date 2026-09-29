import { MessageCircle } from "lucide-react";
import { company } from "@/lib/company";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={company.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ETripleSoft on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
    </a>
  );
}
