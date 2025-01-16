"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { BiSolidComment } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <section className="h-svh flex flex-col overflow-hidden text-white relative">
      <motion.figure layoutId="expandable-card" className="h-svh">
        <Image src="https://picsum.photos/id/46/1080/1080" fill alt={""} />
      </motion.figure>

      <div className="absolute flex h-svh w-full flex-col gap-4 justify-between px-4 py-8">
        <button onClick={handleClick}>
          <AiOutlineClose />
        </button>

        <div>
          <motion.h2
            initial={{ y: -96 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
            className="text-7xl leading-[0.9] font-bold"
          >
            Lost in Tokyo
          </motion.h2>

          <div className="flex justify-between">
            <motion.p
              initial={{ y: 96 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
            >
              By Jonathan Vik
            </motion.p>

            <motion.div
              initial={{ x: 32 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
              className="flex gap-2 items-center"
            >
              <p>8</p>
              <BiSolidComment />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
