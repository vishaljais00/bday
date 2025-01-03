"use client";
import Imagegrid from "@/components/Imagegrid";
import { Geist, Geist_Mono, Playwrite_AR } from "next/font/google";
import Videoframe from "@/components/Videoframe";
import BirthdayPage from "@/components/Romantic";


const playWrite = Playwrite_AR({
  weight: '400', // Choose regular weight
  display: 'swap', // Optional: Use 'swap' for better UX
});


export default function Home() {
  return (
    <div className="glass">
      <BirthdayPage />
      <div className="m-auto text-center pt-8">
        <h1
        className={`text-4xl font-bold mb-8 tracking-wider text-gray-700 animate-bounce ${playWrite.className}`}
      >
        ✨ Our time ✨
      </h1>
        <Imagegrid />
      </div>
    

      <Videoframe />
    </div>
  );
}
