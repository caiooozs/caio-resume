import type { ContactFormData } from "@/modules/components/Contact/Contact.model";

export function ContactService() {
  async function sendMessage(data: ContactFormData) {
    const res = await fetch(
      `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_EMAIL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          subject: `New contact message from portfolio by ${data.name}`,
          template: "_table",
        }),
      },
    );
    const response = await res.json();
    if (!res.ok) {
      throw new Error(response.message || "Failed to send message");
    }

    return response;
  }

  return { sendMessage };
}
