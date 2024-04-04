"use client";

import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "./Input";
import Button from "../Button";
import InputEmail from "./InputEmail";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/send", data)
      .then(() => {
        toast.success("Message envoyé avec succé");
        reset();
      })
      .catch((error) => {
        toast.error("Message no envoyé");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col gap-4 md:gap-8 overflow-hidden">
      <Input
        id="name"
        label="Nom"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <InputEmail
        id="email"
        label="Email"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="phone"
        label="Numéro de téléphone"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button label="Envoyer" onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default ContactForm;
