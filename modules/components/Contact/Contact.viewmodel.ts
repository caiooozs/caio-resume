"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ContactService } from "@/service/Contact/contact.service";
import {
  ContactSchema,
  type ContactFormData,
  type ContactFormErrors,
} from "./Contact.model";

const EMPTY_FORM: ContactFormData = { name: "", email: "", message: "" };

export default function useContactViewModel() {
  const { sendMessage } = ContactService();

  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    const field = name as keyof ContactFormData;

    setForm((prev) => ({ ...prev, [field]: value }));

    setErrors((prev) => {
      if (!prev[field]) return prev;
      const { [field]: _removed, ...rest } = prev;
      return rest;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = ContactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: ContactFormErrors = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData | undefined;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await sendMessage(result.data);
      setForm(EMPTY_FORM);
      toast.success("Message sent!", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
    } catch (error) {
      toast.error("Something went wrong", {
        description:
          error instanceof Error
            ? error.message
            : "Your message could not be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    form,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}
