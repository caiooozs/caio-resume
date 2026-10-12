"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ContactService } from "@/service/Contact/contact.service";
import {
  createContactSchema,
  type ContactFormData,
  type ContactFormErrors,
} from "./Contact.model";
import { useI18n } from "@/lib/i18n/client";

const EMPTY_FORM: ContactFormData = { name: "", email: "", message: "" };

export default function useContactViewModel() {
  const { sendMessage } = ContactService();
  const { t } = useI18n();

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

    const result = createContactSchema(t.contact.errors).safeParse(form);

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
      toast.success(t.contact.success, {
        description: t.contact.successHint,
      });
    } catch (error) {
      toast.error(t.contact.failure, {
        description:
          error instanceof Error ? error.message : t.contact.failureHint,
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
