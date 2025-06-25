import "./globals.css";
import NavSection from "./nav";
import Home from "./page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavSection/>
        {children}
      </body>
    </html>
  );
}
