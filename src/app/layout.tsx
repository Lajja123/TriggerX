import "./globals.css";
import localFont from "next/font/local";

const fontOne = localFont({
  src: "./fonts/Actay-Regular.otf",
  variable: "--Actay-Regular",
});

const fontTwo = localFont({
  src: "./fonts/ActayWide-Bold.otf",
  variable: "--ActayWide-Bold",
});
const fontThree = localFont({
  src: "./fonts/ActayCondensed-Thin.otf",
  variable: "--ActayCondensed-Thin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased gridbg ${fontOne.variable} ${fontTwo.variable} ${fontThree.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
