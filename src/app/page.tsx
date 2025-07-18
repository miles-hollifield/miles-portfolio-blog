import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">{`Hi, I'm Miles 👋`}</h1>
      <p className="text-lg text-gray-700">
        {`I'm a software engineer, writer, and lifelong learner. I love building apps, exploring Japanese, and sharing what I learn.`}
      </p>

      <div className="flex space-x-4">
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {`Read the Blog`}
        </Link>
        <Link
          href="/projects"
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          {`View Projects`}
        </Link>
      </div>
    </section>
  );
}
