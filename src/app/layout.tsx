import Footer from "~/components/footer";
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
      <body className="root-container relative overflow-hidden">
        <div className="max-w-9xl grid18 main-container m-auto">
          <nav className="md:col-end-18 col-span-full md:col-start-2">
            {/* <Header /> */}
          </nav>
          <main className="grid18 col-span-full">{children}</main>
          <footer className="md:col-end-19 lg:col-end-18 col-span-full md:col-start-1 lg:col-start-2">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
