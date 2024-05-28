import "./globals.scss";

export const metadata = {
  title: "Test With deRis",
  description: "Test With deRis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
