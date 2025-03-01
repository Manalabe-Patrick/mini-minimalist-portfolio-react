import FloatingLinks from "./components/FloatingLinks";
import AboutMePage from "./pages/AboutMePage";
import HomePage from "./pages/HomePage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import { Menu } from "lucide-react";
import { useState } from "react";
import SEO from "./components/SEO";

function App() {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  return (
    <>
      <SEO />
      <FloatingLinks />
      <Tabs defaultValue="home" className="w-100 lg:px-[10%] xl:px-[15%]">
        <TabsList className="w-[100%] flex justify-between py-10">
          <TabsTrigger value="logo" className="bg-white">
            <span className="text-4xl font-bold text-customDark">PM</span>
          </TabsTrigger>
          {/* Mobile Menu */}
          <div className="block md:hidden mr-[3%]">
            <Menu onClick={() => setOpenMobileMenu(true)} />
          </div>
          <div
            className={`${
              openMobileMenu ? "absolute" : "hidden"
            } absolute top-0 left-0 z-10 h-[100vh] w-[100vw] bg-white flex flex-col pt-[200px]`}
          >
            <TabsTrigger
              value="home"
              className="bg-white block"
              onClick={() => setOpenMobileMenu(false)}
            >
              HOME
            </TabsTrigger>
            <TabsTrigger
              value="aboutme"
              className="px-10 my-4 bg-white block"
              onClick={() => setOpenMobileMenu(false)}
            >
              ABOUT ME
            </TabsTrigger>
            <TabsTrigger
              value="portfolio"
              className="bg-white block"
              onClick={() => setOpenMobileMenu(false)}
            >
              PORTFOLIO
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className=" bg-white block my-4"
              onClick={() => setOpenMobileMenu(false)}
            >
              CONTACT
            </TabsTrigger>
          </div>
          {/* Web Menu */}
          <div className="hidden md:block">
            <TabsTrigger value="home" className="bg-white">
              HOME
            </TabsTrigger>
            <TabsTrigger value="aboutme" className="px-10 bg-white">
              ABOUT ME
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="bg-white">
              PORTFOLIO
            </TabsTrigger>
            <TabsTrigger value="contact" className="pl-10 bg-white">
              CONTACT
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="logo">
          <HomePage />
        </TabsContent>
        <TabsContent value="home">
          <HomePage />
        </TabsContent>
        <TabsContent value="portfolio">
          <PortfolioPage />
        </TabsContent>
        <TabsContent value="aboutme">
          <AboutMePage />
        </TabsContent>
        <TabsContent value="contact">
          <ContactPage />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default App;
