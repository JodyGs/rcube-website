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
      <body>{children}</body>
    </html>
  );
}
