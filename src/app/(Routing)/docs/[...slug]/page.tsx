export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const { slug } = params;
  return (
    <div>
      <h1>Views slug length {slug.length}</h1>
      <p>Learn Dynamic Routes (Catch-all Segments) ...slug </p>
    </div>
  );
}
