const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-brand-500 via-brand-800 to-stone-900">
      {children}
    </div>
  );
};
export default AuthLayout;
