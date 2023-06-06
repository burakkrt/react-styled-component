export default function AnimalsCard({ title, children }) {

  return (
    <div className="card bg-secondary">
      <h1>{title}</h1>
      {children}
    </div>
  );
}