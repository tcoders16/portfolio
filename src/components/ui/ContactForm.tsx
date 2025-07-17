"use client";
import React, { useState } from "react";
import { Label } from "../lable";
import { Input } from "../input";
import { cn } from "../../lib/util";



export function ContactForm() {
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);
  const email = "emailtosolankiom@gmail.com";
  const phone = "+1 (289)-400-8975";

const handleCopy = (value: string, field: "email" | "phone") => {
  navigator.clipboard.writeText(value).then(() => {
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1000);
  });
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black poppins-medium">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">

        Contact

      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 poppins-light dark:text-neutral-300">
      Contact Solanki For <span className="text-blue-500 text-lg poppins-bold">Hiring</span> Or <span className="text-blue-500 text-lg poppins-bold">Contract</span> Purpose!
      </p>
      <br />
      <br />

      <div className="mb-4 ">
        <Label htmlFor="email" className="poppins-bold text-lg text-white">
          Omkumar's Contact Details
        </Label>

        {/* Email Field */}
        <div className="flex gap-2 mt-6 w-full ">
        <LabelInputContainer className="mb-4 flex-col">
          <Label htmlFor="emailOmkumar" className="">Email</Label>
          <Input
            id="emailOmkumar"
            className="poppins-light"
            value={email}

          />
        </LabelInputContainer>
        <button
          type="button"
          onClick={() => handleCopy(email, "email")}
          className={cn(
            "rounded px-2 py-1 text-xs font-medium transition-colors h-10 mt-6", // ⬅️ smaller padding and font
            copiedField === "email"
              ? "bg-blue-600 text-white"
              : "bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
          )}
        >
          {copiedField === "email" ? "Copied!" : "Copy"}
        </button>
        </div>

        {/* Phone Field */}
        <div className="flex gap-2 w-full">
        <LabelInputContainer className="mb-8">
          <Label htmlFor="phoneOmkumar">Phone Number</Label>
          <Input
            id="phoneOmkumar"
            className="poppins-light"
            value={phone}

          />
        </LabelInputContainer>
        <button
          type="button"
          onClick={() => handleCopy(phone, "phone")}
          className={cn(
            "rounded px-2 py-1 text-xs font-medium transition-colors h-10 mt-6", // ⬅️ smaller padding and font
            copiedField === "phone"
              ? "bg-blue-600 text-white"
              : "bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
          )}
        >
          {copiedField === "phone" ? "Copied!" : "Copy"}
        </button>
        </div>
      </div>

      <br />



        <Label htmlFor="personDetail" className="poppins-semibold text-white">
          Enter Your Details
        </Label>

      <form className="my-5 mt-6" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="hisFirstname">First name</Label>
            <Input id="firstname" placeholder="Om" className="poppins-light" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="hisLastname">Last name</Label>
            <Input id="lastname" placeholder="Solanki"  className="poppins-light" type="text" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="hisNumber">Phone Number</Label>
          <Input id="password" placeholder="+1 (647)-708-2575" className="poppins-light" type="password" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="hisEmail">Email</Label>
          <Input id="password" placeholder="tcoders08164002@gmail.com" className="poppins-light" type="password" />
        </LabelInputContainer>


        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          CONTACT &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />





    {/* Links */}





      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};