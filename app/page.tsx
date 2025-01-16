import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Card from "./components/card";

const posts = [
  {
    id: "b883b678-a28c-4a44-9901-c6a9f0a5176d",
    title: "Lost in Tokyo",
    author: "Jonathan Vik",
    commentsCount: 8,
  },
];

export default function Home() {
  return (
    <main className="font-sans flex flex-col items-center p-8 gap-4">
      <p>
        <span className="font-semibold">Shared</span> by you
      </p>

      {posts?.map((post) => (
        <Card key={post.id} content={post} />
      ))}
    </main>
  );
}
