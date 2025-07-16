"use client";

import { PinContainer } from "../3d-pin";

export default function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center poppins-thin">
      <PinContainer
        title="Thankyou 😇"
        href="https://x.com/Ceo_HSD"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Help Community to grow
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              10% of income goes to poor house hold every single month 💙

            </span>
          </div>
          <div className="flex flex-1 w-full mt-4 rounded-lg overflow-hidden">
        <img
          src="/images/logos/foodsec.jpg" // replace this with your actual image URL
          alt="Descriptive alt text"
          className="w-full h-64 object-cover"
        />
      </div>
        </div>
      </PinContainer>
    </div>
  );
}

