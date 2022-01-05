import WebFont from "webfontloader";
import { useEffect } from "react";
import { Outlet } from "react-router";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { useState } from "react";
import { Context } from "./Context.js";

export default function App() {
  useEffect(() => {
    console.log("helllo effect");
    // window.scrollTo(0, 0);
    WebFont.load({
      google: {
        families: ["Murecho", "Roboto"],
      },
    });
  }, []);

  // window.addEventListener('resize', turnoffAnimations());
  const [context, setContext] = useState(true);

  return (
    <main >
      <Context.Provider value={[context, setContext]}>
        <header >
          <div>
            <Menu />
          </div>
        </header>
        <Outlet />
        <Footer />
      </Context.Provider>
    </main>
  );
}
