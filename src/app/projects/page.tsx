export default function ProjectsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">{`Projects`}</h1>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          <strong>{`Kakitori`}</strong>
          {` – a web app for practicing Japanese grammar using AI-generated sentence drills.`}
        </li>
        <li>
          <strong>{`Guild Game`}</strong>
          {` – an indie game combining adventurer management, dating sim, and dungeon crawling.`}
        </li>
        <li>
          <strong>{`Portfolio + Blog`}</strong>
          {` – you're looking at it! Built with Next.js, Tailwind CSS, and MDX.`}
        </li>
      </ul>
    </section>
  );
}
