"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import Card from "./components/card";

export default function Home() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul className="mb-16 flex w-full snap-x snap-mandatory gap-x-4 gap-y-12 overflow-x-scroll px-4 md:grid md:grid-cols-2 md:px-8 lg:grid-cols-3">
          <li className="flex w-11/12 shrink-0 snap-center flex-col md:w-full">
            <Card />
          </li>
          <li className="flex w-11/12 shrink-0 snap-center flex-col md:w-full">
            <Card />
          </li>
          <li className="flex w-11/12 shrink-0 snap-center flex-col md:w-full">
            <Card />
          </li>
        </ul>
      </main>
    </div>
  );
}
