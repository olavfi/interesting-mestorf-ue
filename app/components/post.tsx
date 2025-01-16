"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidComment } from "react-icons/bi";
import posts from "../posts.json";

const Post = () => {
  const router = useRouter();
  const pathname = usePathname();

  const post = posts.find((post) => post.slug === pathname);

  const handleClick = () => {
    router.push("/", { scroll: true });
  };

  return (
    <section className="h-svh flex flex-col overflow-hidden text-white relative">
      <motion.figure layoutId={post?.id} className="h-svh">
        {post?.image && (
          <Image src={post.image} fill alt={""} className="object-cover" />
        )}
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
            {post?.title}
          </motion.h2>

          <div className="flex justify-between">
            <motion.p
              initial={{ y: 96 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
            >
              By {post?.author}
            </motion.p>

            <motion.div
              initial={{ x: 32 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
              className="flex gap-2 items-center"
            >
              <p>{post?.commentsCount}</p>
              <BiSolidComment />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
