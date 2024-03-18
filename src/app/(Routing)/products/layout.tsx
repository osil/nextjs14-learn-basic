export default function ProductLayout({
  children,
}: {
  children: React.ReactInstance;
}) {
  return (
    <>
      <h2>Nested Layouts</h2>
      {children}
    </>
  );
}
