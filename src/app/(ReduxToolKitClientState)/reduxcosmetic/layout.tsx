import ReduxProvider from "@/store/ReduxTK/ReduxProvider";

export default function ReduxCosmeticLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
