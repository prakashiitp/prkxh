export default function Section({ title, children, id }) {
  return (
    <div id={id} className="container mt-10">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}