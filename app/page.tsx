import Image from "next/image";
import "../app/globals.css";
import Landing from "./components/Landing";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Landing />
      <Hero />
      <Footer />
    </main>
  );
}
