import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./ui/globals.css";

export const metadata = {
  title: "Salondb_KKU",
  description: "Salondb_KKU",
};

const IBMTHAI = IBM_Plex_Sans_Thai({
  subsets: ['latin'],
  display: 'swap',
  weight: '300',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={IBMTHAI.className}>{children}</body>
    </html>
  );
}
