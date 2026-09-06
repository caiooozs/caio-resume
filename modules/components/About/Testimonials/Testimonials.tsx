import FadeInAnimation from "@/components/ui/fade-animation";
import TestimonialCard from "./components/TestimonialCard";
import { TestimonialsData, TestimonialsHeading } from "./data/data";

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-5">
      <FadeInAnimation animationDuration={0.2} viewPort>
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="text-[11px] font-medium tracking-wide text-white/35 uppercase">
            {TestimonialsHeading.label}
          </span>
          <p className="max-w-xl text-sm font-light text-white/45">
            {TestimonialsHeading.desc}
          </p>
        </div>
      </FadeInAnimation>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {TestimonialsData.map((testimonial, index) => (
          <FadeInAnimation
            key={testimonial.id}
            animationDuration={0.3}
            animationDelay={index * 0.05}
            viewPort
            className="h-full"
          >
            <TestimonialCard {...testimonial} />
          </FadeInAnimation>
        ))}
      </div>
    </div>
  );
}
