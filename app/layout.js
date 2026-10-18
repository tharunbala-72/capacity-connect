import "./globals.css";

export const metadata = {
  title: "Capacity Connect | IMD",
  description: "IMD internal training and digital capacity-building portal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
