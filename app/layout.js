import "./globals.css";
import NavSection from "./nav";

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
