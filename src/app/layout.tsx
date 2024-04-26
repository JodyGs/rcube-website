import Footer from "~/components/sections/Footer";
import Header from "~/components/sections/Header";
import "~/styles/globals.css";

export const metadata = {
  title: "Rcube",
  description: "The 360° platform for portfolio manager entrepreneurs",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="root-container relative overflow-hidden">
        <div className="grid18 main-container m-auto max-w-9xl">
          <header className="grid18 col-span-full gap-x-4 border-b-[1px] border-custom-grey-400">
            <Header />
          </header>
          <main className="grid18 col-span-full gap-x-4">{children}</main>
          <footer className="grid18 col-span-full border-t-[1px] border-custom-grey-400">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
