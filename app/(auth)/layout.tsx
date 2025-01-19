export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="main-layout min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-500 via-brand-800 to-stone-900">
        <div>{children}</div>
      </body>
    </html>
  );
}
