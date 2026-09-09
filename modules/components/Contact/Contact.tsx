"use client";

import { ContactView } from "./Contact.view";
import useContactViewModel from "./Contact.viewmodel";

export default function Contact() {
  const props = useContactViewModel();
  return <ContactView {...props} />;
}
