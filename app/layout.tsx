import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuvam Bhardwaj - Machine Learning Engineer & Full-Stack Developer",
  description:
    "Aspiring Machine Learning Researcher/Engineer and experienced Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-container px-4">{children}</div>
      </body>
    </html>
  );
}
