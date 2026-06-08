"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import {
  Facebook,
  FileText,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const contactLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100010599582437",
    icon: Facebook,
  },
  {
    label: "Gmail",
    href: "mailto:sanyuaung.ygn.mm@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+959788599188",
    icon: Phone,
  },
  {
    label: "Telegram",
    href: "https://t.me/San_Yu_Aung",
    icon: Send,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/SanYuAung/",
    icon: Linkedin,
  },
  // {
  //   label: "Skype",
  //   href: "https://join.skype.com/invite/mb2hbOTPgTN2",
  //   icon: MessageCircle,
  // },
  {
    label: "GitHub",
    href: "https://github.com/Sanyuaung",
    icon: Github,
  },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/1qdoSzNcjO_g1etzvseIELnX-8TGXc_yqhkcfYYynQDM/edit?usp=sharing",
    icon: FileText,
  },
];

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = async (params) => {
    const toastId = toast.loading("Initiating uplink to UFO...", {
      description: "Encrypting transmission packet",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error("Unable to send message.");
      }

      toast.success("Signal received in orbit!", {
        id: toastId,
        description: "We'll beam a reply back shortly.",
      });
    } catch (error) {
      toast.error("Transmission failed — retry after recalibration.", {
        id: toastId,
        description: "Galactic interference detected.",
      });
    }
  };

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="ufo-form max-w-md w-full flex flex-col items-center justify-center space-y-5 relative"
      >
        <motion.h2
          variants={item}
          className="text-2xl font-semibold tracking-wide bg-gradient-to-r from-accent/80 to-accent text-transparent bg-clip-text"
        >
          Send Interstellar Transmission
        </motion.h2>
        <motion.div
          variants={item}
          className="custom-bg grid w-full grid-cols-1 gap-4 rounded-md border border-accent/30 p-4 shadow-lg backdrop-saturate-150 sm:grid-cols-[auto_1fr] sm:items-center"
        >
          <div className="mx-auto rounded-md border border-accent/40 bg-foreground p-2 shadow-lg shadow-background/30 sm:mx-0">
            <Image
              src="/QR.jpeg"
              alt="Contact QR code"
              width={128}
              height={128}
              className="h-28 w-28 rounded-sm object-cover sm:h-32 sm:w-32"
            />
          </div>
          <div className="grid w-full grid-cols-2 gap-2">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                title={label}
                className="group flex h-10 items-center gap-2 rounded-md border border-accent/25 bg-background/35 px-3 text-sm text-foreground transition-all hover:border-accent hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/70"
              >
                <Icon className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                <span className="truncate">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
        <motion.input
          variants={item}
          type="text"
          placeholder="Commander Name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be atleast 3 characters long.",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 custom-bg backdrop-saturate-150"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder="Contact Frequency (email)"
          {...register("email", { required: "This field is required!" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 custom-bg backdrop-saturate-150"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          variants={item}
          placeholder="Galactic Message (50 - 500 chars)"
          {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters",
            },
            minLength: {
              value: 50,
              message: "Message should be more than 50 characters",
            },
          })}
          className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 custom-bg backdrop-saturate-150 min-h-[160px]"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Transmit Signal"
          className="px-10 py-4 rounded-md shadow-lg bg-background/40 border border-accent/40 border-solid hover:shadow-glass-sm backdrop-blur-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent/70 cursor-pointer uppercase tracking-wide relative overflow-hidden group"
          type="submit"
        />
      </motion.form>
    </>
  );
}
