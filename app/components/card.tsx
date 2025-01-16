"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { BiExpandAlt } from "react-icons/bi";

const Card = ({ content }) => {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <motion.figure
        layoutId="expandable-card"
        // initial state opacity
        //animation of component appearence
        // how your element will appears f.e(duration in seconds)
      >
        <Image
          src="https://picsum.photos/id/46/1080/1080"
          width={360}
          height={360}
          alt={""}
        />
      </motion.figure>
      <motion.div
        exit={{ opacity: 0 }}
        className="flex flex-col gap-4 items-center"
      >
        <h2 className="text-4xl font-bold">Lost in Tokyo</h2>
        <p className="max-w-[32ch]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
          volutpat libero, eget feugiat elit.
        </p>

        <Link href="/posts/something">
          <div className="bg-black rounded-full max-w-fit p-4">
            <BiExpandAlt style={{ color: "white" }} />
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Card;
