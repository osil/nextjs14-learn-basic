export default function ProductLayout({
  children,
  productlist,
}: {
  children: React.ReactNode;
  productlist: React.ReactNode;
}) {
  return (
    <>
      <h2>Nested Layouts In Products Folders</h2>
      {children}
      {productlist}
    </>
  );
}
