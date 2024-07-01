import BooksList from "@/components/booksList";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="bg-white w-full h-16">
        <a href="/book">Book</a>
      </div>
      <BooksList />
    </div>
  );
}
