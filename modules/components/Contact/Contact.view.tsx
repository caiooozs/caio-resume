import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { CopyEmail } from "@/components/ui/copy-email";
import { SectionHeading } from "@/components/ui/kit";
import { SocialRow } from "@/modules/components/About/Shared/SocialIconLink";
import { MyInfosData } from "@/modules/components/About/MyInfos/data/data";
import { useI18n } from "@/lib/i18n/client";
import { ContactViewProps } from "./Contact.model";

const EMAIL = "caioccosta22@gmail.com";

/** Titulo e convite a esquerda; o formulario, sem caixa, a direita. */
export const ContactView = ({
  form,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit,
}: ContactViewProps) => {
  const socials = MyInfosData.socials.filter((social) => social.icon !== "mail");
  const { t } = useI18n();

  return (
    <section
      id="contact"
      className="grid grid-cols-1 items-start gap-12 pt-10 sm:pt-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)] md:gap-14"
    >
      <div className="flex flex-col">
        <h1
          className="enter text-[2.375rem] leading-[1.05] font-semibold tracking-[-0.04em] text-ink sm:text-[2.875rem]"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          {t.contact.title}
        </h1>
        <p
          className="enter mt-5 max-w-[30rem] text-[1.0625rem] leading-relaxed text-muted"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {t.contact.intro}
        </p>

        <div className="enter mt-8 flex flex-col gap-3" style={{ "--i": 2 } as React.CSSProperties}>
          <CopyEmail email={EMAIL} />
          <SocialRow links={socials} />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        aria-labelledby="contact-form-title"
        className="flex flex-col gap-6 md:pt-2"
      >
        <SectionHeading as="h2" id="contact-form-title">
          {t.contact.formTitle}
        </SectionHeading>

        <div
          data-reveal="rise"
          style={{ "--i": 2 } as React.CSSProperties}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">{t.contact.name}</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t.contact.namePlaceholder}
              autoComplete="name"
              disabled={isSubmitting}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className="text-sm text-danger">
                {errors.name}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">{t.contact.email}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t.contact.emailPlaceholder}
              autoComplete="email"
              disabled={isSubmitting}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="text-sm text-danger">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        <div
          data-reveal="rise"
          style={{ "--i": 3 } as React.CSSProperties}
          className="flex flex-col gap-2"
        >
          <Label htmlFor="message">{t.contact.message}</Label>
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t.contact.messagePlaceholder}
            disabled={isSubmitting}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="text-sm text-danger">
              {errors.message}
            </span>
          )}
        </div>

        <div data-reveal="rise" style={{ "--i": 4 } as React.CSSProperties} className="flex justify-end">
          <Button type="submit" size="lg" disabled={isSubmitting} className="group w-full sm:w-auto">
            {isSubmitting ? (
              <>
                <Spinner />
                {t.contact.sending}
              </>
            ) : (
              <>
                {t.contact.send}
                <ArrowRight className="transition-[translate] duration-300 ease-out-expo group-hover:translate-x-0.5" />
              </>
            )}
          </Button>
        </div>
      </form>
    </section>
  );
};
