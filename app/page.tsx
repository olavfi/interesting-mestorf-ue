import Card from "./components/card";
import posts from "./posts.json";

export default function Home() {
  return (
    <main className="font-sans p-8">
      <p>
        <span className="font-semibold">Shared</span> by you
      </p>

      <Card content={posts[0]} />
    </main>
  );
}
