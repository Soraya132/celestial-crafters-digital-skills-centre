import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export const metadata = {
  title: "Celestial Crafters Digital skills centre",
  description: "Celestial Crafters Digital skills centre offers free digital skills to the vulnerable young girls and women ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="!font-poppins">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
