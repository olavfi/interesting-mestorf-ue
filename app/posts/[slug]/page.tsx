import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { BiSolidComment } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Post from "@/app/components/post";

export default async function Home(props: { params }) {
  return <Post />;
}
