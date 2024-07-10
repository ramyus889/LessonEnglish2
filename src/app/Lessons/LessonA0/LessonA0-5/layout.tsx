import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LessonA0-5",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
