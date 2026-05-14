import { useEffect, useState } from "react";
import { SystemShowcase } from "./pages/SystemShowcase";
import {
  Allergens,
  Community,
  DishMarquee,
  Features,
  FinalCTA,
  Footer,
  Hero,
  HowItWorks,
  LiveDemo,
  Nav,
  RealProduct,
  SmartModes,
} from "./sections";

/**
 * App — entry point and tiny client-side router.
 *
 * Routes:
 *   /        → Home (full marketing site)
 *   /system  → SystemShowcase (design QA reference)
 *
 * Vercel SPA fallback in vercel.json ensures /system resolves on refresh.
 */
export function App() {
  const [pathname, setPathname] = useState(
    typeof window === "undefined" ? "/" : window.location.pathname,
  );

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  if (pathname === "/system") {
    return <SystemShowcase />;
  }

  return <Home />;
}

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DishMarquee />
        <HowItWorks />
        <Features />
        <Allergens />
        <LiveDemo />
        <SmartModes />
        <Community />
        <RealProduct />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
