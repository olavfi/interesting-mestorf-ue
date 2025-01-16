import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Card from "./components/card";
import posts from "./posts.json";

export default function Home() {
  return (
    <main className="font-sans flex flex-col items-center p-8 gap-16">
      <p>
        <span className="font-semibold">Shared</span> by you
      </p>

      {posts?.map((post) => (
        <Card key={post.id} content={post} />
      ))}
    </main>
  );
}
