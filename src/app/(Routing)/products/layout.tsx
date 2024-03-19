"use client";
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Nested Layouts In Products Folders</h2>
      {children}
    </>
  );
}
