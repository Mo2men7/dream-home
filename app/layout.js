import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./_components/ConstantComponents/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Dream Home",
  description: "A Property inSaudi Arabia with 5 Departments to be Reserved",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased px-4 bg-gray-100`}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
