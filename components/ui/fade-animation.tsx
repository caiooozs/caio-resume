"use client";

import { motion } from "motion/react";
import { FadeInAnimationProps } from "@/types/types";

export default function FadeInAnimation({
  children,
  viewPort,
  animationDuration,
  animationDelay,
  className,
  reverse,
  ...rest
}: FadeInAnimationProps) {
  return (
    <>
      {viewPort ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: animationDuration,
            ease: "easeOut",
            delay: animationDelay,
          }}
          className={className}
          {...rest}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: animationDuration,
            ease: "easeOut",
            delay: animationDelay,
          }}
          className={className}
          {...rest}
        >
          {children}
        </motion.div>
      )}

      {reverse && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: animationDuration,
            ease: "easeOut",
            delay: animationDelay,
          }}
          className={className}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
