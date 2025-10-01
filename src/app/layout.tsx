import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruna Borges — Links",
  description: "Link-in-bio da Bruna Borges (BM Tech Lab)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className='min-h-dvh w-screen overflow-x-hidden
          bg-[url("/background.svg")] bg-cover bg-center bg-no-repeat bg-fixed
          text-zinc-100 antialiased'
      >
        {children}
      </body>
    </html>
  );
}
