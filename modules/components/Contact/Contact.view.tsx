import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import FadeInAnimation from "@/components/ui/fade-animation";
import {
  GlassCard,
  GlassCardBadge,
  GlassCardContent,
} from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail } from "lucide-react";
import { ContactViewProps } from "./Contact.model";

export const ContactView = ({
  form,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit,
}: ContactViewProps) => {
  return (
    <FadeInAnimation animationDuration={0.3}>
      <section id="contact" className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 p-4 text-center sm:p-3">
          <AnimatedGradientText
            className="text-3xl font-semibold uppercase sm:text-4xl lg:text-3xl"
            colorFrom="#53456dff"
            colorTo="#9979d4ff"
          >
            Contact
          </AnimatedGradientText>
          <p className="max-w-xl text-sm font-light text-white/45">
            Got a project, an idea or just want to say hi? Drop me a message and
            I&apos;ll get back to you.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <div className="pointer-events-none absolute -bottom-16 left-1/2 h-64 w-full max-w-[36rem] -translate-x-1/2 rounded-full bg-[#8B5CF6]/15 blur-[120px]" />

          <GlassCard glyph="@">
            <GlassCardContent className="px-5 py-10 sm:px-10 sm:py-12">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-6"
              >
                <GlassCardBadge className="mx-auto">
                  <Mail className="size-3" />
                  Send a message
                </GlassCardBadge>

                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex flex-1 flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      disabled={isSubmitting}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="text-xs text-red-400">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      autoComplete="email"
                      disabled={isSubmitting}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <span id="email-error" className="text-xs text-red-400">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me what you have in mind..."
                    disabled={isSubmitting}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <span id="message-error" className="text-xs text-red-400">
                      {errors.message}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="mt-2 h-12 w-full gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
              </form>
            </GlassCardContent>
          </GlassCard>
        </div>
      </section>
    </FadeInAnimation>
  );
};
