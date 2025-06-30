import "./globals.css";
import NavSection from "./nav";
import Home from "./page";
import About from "./about";
import Blog from "./Blog";
import Contact from "./Contact";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavSection/>
        <Home/>
        <About/>
        <Blog/>
        <Contact/>
      </body>
    </html>
  );
}
