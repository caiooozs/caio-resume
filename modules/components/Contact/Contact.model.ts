import { z } from "zod";
import type useContactViewModel from "./Contact.viewmodel";

export const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export type ContactViewProps = ReturnType<typeof useContactViewModel>;
