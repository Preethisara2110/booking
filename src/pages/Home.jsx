import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Offers from "../components/Offers.jsx";
import { ReservationInfo, News, TableBooking, FAQ, DownloadApp } from "../components/Sections.jsx";

export default function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo(0, 0);
  }, [hash]);

  return (
    <main>
      <Hero />
      <Offers />
      <ReservationInfo />
      <News />
      <TableBooking />
      <FAQ />
      <DownloadApp />
    </main>
  );
}
