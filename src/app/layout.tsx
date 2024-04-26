import Footer from "~/components/Footer";
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
          <nav className="col-span-full md:col-start-2 md:col-end-18">
            {/* <Header /> */}
          </nav>
          <main className="grid18 col-span-full">{children}</main>
          <footer className="grid18 col-span-full border-t-[1px] border-custom-grey-400">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
