import IconDownLeftArrow from "@/components/icons/icon-down-left-arrow";
import React from "react";

const Home = () => {
  return (
    <main className=" min-h-screen">
      <div className="flex flex-col items-center gap-6 py-20">
        <h1 className="text-[64px]/[76.8px] font-playfair-display font-medium text-center px-[34px]">
          Enjoy Your Favorite <br /> Coffee with Ngopi
        </h1>
        <p className="text-center text-xl/8">
          Discover tranquility at Ngopi a sanctuary for unwinding,
          <br /> where your evenings are perfected with relaxation and rich
          flavors.
        </p>
        <button
          type="button"
          className="px-12 py-6 bg-primary text-white rounded-[20px] font-playfair-display text-2xl flex gap-4 hover:bg-white hover:text-primary border border-primary group transition hover:scale-105"
        >
          <span>Explore product</span>
          <IconDownLeftArrow className="transition group-hover:translate-x-1 group-hover:translate-y-1"/>
        </button>
      </div>
    </main>
  );
};

export default Home;
