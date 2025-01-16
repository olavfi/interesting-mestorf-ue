"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>Hei!!!</p>

        <button onClick={() => setShow((prev) => !prev)}>Show</button>
      </main>
    </div>
  );
}
