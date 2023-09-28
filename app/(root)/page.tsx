import IntroPage from "@/components/IntroPage";
import RulesPage from "@/components/RulesPage";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/shared/Navbar";
import CriteriaPage from "@/components/CriteriaPage";
import FAQPage from "@/components/FAQPage";

const Page = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        <HomePage />
        <IntroPage />
        <RulesPage />
        <CriteriaPage />
        <FAQPage />
      </main>
    </div>
  );
};

export default Page;