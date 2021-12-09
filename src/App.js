import WebFont from "webfontloader";
import { useEffect } from "react";
import { Outlet } from "react-router";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { createContext } from "react";


export const Context = createContext(true);

export default function App() {
  useEffect(() => {
    console.log("helllo effect");
    WebFont.load({
      google: {
        families: ["Murecho", "Roboto"],
      },
    });
  }, []);

  // window.addEventListener('resize', turnoffAnimations());


  return (
    <main>
      <Context.Provider value={true}>
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
