"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { BiExpandAlt } from "react-icons/bi";
import { Post } from "../types";

const Card = ({ content }: { content: Post }) => {
  const { title, image, description, id, slug } = content;

  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <motion.figure layoutId={id}>
        <Image
          src={image}
          width={360}
          height={360}
          alt={""}
          className="object-cover"
        />
      </motion.figure>
      <motion.div
        exit={{ opacity: 0 }}
        className="flex flex-col gap-4 items-center"
      >
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="max-w-[32ch]">{description}</p>

        <Link href={slug}>
          <div className="bg-black rounded-full max-w-fit p-4">
            <BiExpandAlt style={{ color: "white" }} />
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Card;
