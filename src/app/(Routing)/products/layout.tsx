export default function ProductLayout({
  children,
}: {
  children: React.ReactInstance;
}) {
  return (
    <>
      <h2>Nested Layouts In Products Folders</h2>
      {children}
    </>
  );
}
