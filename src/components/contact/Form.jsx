"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

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

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Initiating uplink to UFO...", {
      description: "Encrypting transmission packet",
    });

    // toast.info(
    //   "Form submissions are demo-only here. Please checkout the final code repo to enable it. If you want to connect you can reach out to me via codebucks27@gmail.com.",
    //   {
    //     id: toastId,
    //   }
    // );

    // comment out the above toast.info and uncomment the below code to enable emailjs

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // you can not send more then 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success("Signal received in orbit!", {
            id: toastId,
            description: "We'll beam a reply back shortly.",
          });
        },
        (error) => {
          toast.error("Transmission failed — retry after recalibration.", {
            id: toastId,
            description: "Galactic interference detected.",
          });
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      title: "New interstellar transmission from portfolio",
      from_name: data.name,
      reply_to: data.email,
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
