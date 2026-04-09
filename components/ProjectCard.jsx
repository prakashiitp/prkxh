export default function ProjectCard({ title, desc, tech }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
      <p className="text-xs text-gray-400 mt-2">{tech}</p>
    </div>
  );
}