import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Bruna Borges — Links",
  description: "Link-in-bio da Bruna Borges (BM Tech Lab)",
  icons: {
    icon: "/icon.png",
  },
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
          bg-[url("/background.png")] md:bg-cover lg:bg-cover bg-center bg-no-repeat bg-fixed
          text-zinc-100 antialiased'
      >
        {children}
      </body>
    </html>
  );
}
