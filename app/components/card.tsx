import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <AnimatePresence>
      <div className="flex flex-col">
        <figure className="aspect-square">
          <Image
            src="https://picsum.photos/1080/1080"
            width={1080}
            height={1080}
            alt={""}
          />
          <motion.h2 exit={{ color: "hotpink" }}>Title</motion.h2>
          <Link href="/posts/something">Expand</Link>
        </figure>
      </div>
    </AnimatePresence>
  );
};

export default Card;
