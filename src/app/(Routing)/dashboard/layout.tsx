export default function ProductLayout({
  children,
  productlist,
  bloglist,
  loginpage,
}: {
  children: React.ReactNode;
  productlist: React.ReactNode;
  bloglist: React.ReactNode;
  loginpage: React.ReactNode;
}) {
  const isLogin = true;
  return isLogin ? (
    <>
      <h2>Layout Parallel Routes </h2>
      {children}

      <div>
        <p>product</p>
        <div>{productlist}</div>
      </div>
      <div>
        <p>blog</p>
        {bloglist}
      </div>
    </>
  ) : (
    loginpage
  );
}
