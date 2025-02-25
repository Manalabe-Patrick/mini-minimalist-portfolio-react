import FloatingLinks from "./components/FloatingLinks";
import AboutMePage from "./pages/AboutMePage";
import HomePage from "./pages/HomePage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <FloatingLinks />
      <Tabs defaultValue="home" className="w-100 lg:px-[10%] xl:px-[15%]">
        <TabsList className="w-[100%] flex justify-between py-10">
          <TabsTrigger value="logo">
            <span className="text-4xl font-bold text-customDark">PM</span>
          </TabsTrigger>
          <div>
            <TabsTrigger value="home">HOME</TabsTrigger>
            <TabsTrigger value="aboutme" className="px-10">
              ABOUT ME
            </TabsTrigger>
            <TabsTrigger value="portfolio">PORTFOLIO</TabsTrigger>
            <TabsTrigger value="contact" className="pl-10">
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
