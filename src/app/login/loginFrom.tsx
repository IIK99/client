"use client";

import { useState } from "react";
import Heading from "../components/heading";
import Input from "../components/inputs/inputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginFrom = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
  };
  return (
    <>
      <Heading title={"Sign In to Iku Market"} />
      <Button
        outline
        label="Login with Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
      />
      <hr className=" bg-slate-300 w-full h-px" />
      
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading" : "Login"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className=" text-sm">
        Do not have an account?{""}
        <Link className=" underline ml-2" href={"/register"}>
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default LoginFrom;
