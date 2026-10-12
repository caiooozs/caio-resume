import { z } from "zod";
import type useContactViewModel from "./Contact.viewmodel";

/** Mensagens de erro no idioma da pagina. */
export type ContactErrorMessages = {
  name: string;
  email: string;
  message: string;
};

export const createContactSchema = (errors: ContactErrorMessages) =>
  z.object({
    name: z.string().min(1, errors.name),
    email: z.email(errors.email),
    message: z.string().min(1, errors.message),
  });

export const ContactSchema = createContactSchema({
  name: "Name is required",
  email: "Invalid email",
  message: "Message is required",
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export type ContactViewProps = ReturnType<typeof useContactViewModel>;
