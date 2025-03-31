import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Home6 from "@/components/homes/home-6";
import Hero1 from "@/components/homes/home-6/heros/Hero1";
import Image from "next/image";

export const metadata = {
  title:
    "JoyPal Logistics | Smart, Affordable & Sustainable Delivery Solutions",
  description:
    "JoyPal Logistics provides end-to-end courier and logistics services including international shipping, local delivery, furniture recycling, and free charitable donation transport — built for convenience, care, and community impact.",
};

export default function Home6MainDemoOnepage() {
  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header6 />
          </nav>
          <main id="main">
            <section
              className="home-section bg-gradient-gray-light-1 bg-scroll scrollSpysection"
              id="home"
            >
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  alt=""
                />
              </div>
              <Hero1 />
            </section>

            <Home6 onePage />
          </main>
          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
