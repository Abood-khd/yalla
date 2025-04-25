import Header from "@/components/Header";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import PopularNewCars from "@/components/PopularNewCars";
import PopularElectric from "@/components/PopularElectric";
import PopularUsedCars from "@/components/PopularUsedCars";
import UsedCarsByBudget from "@/components/UsedCarsByBudget";
import BrowseByCategory from "@/components/BrowseByCategory";
import PopularCarPrices from "@/components/PopularCarPrices";
import CarComparisons from "@/components/CarComparisons";
import PopularCarVideos from "@/components/PopularCarVideos";
import CertifiedDealers from "@/components/CertifiedDealers";
import LatestNews from "@/components/LatestNews";
export default function Home() {
  return (
    <div>
      <div className="flex-1">
        <Header />
      </div>
      <Services />
      <Brands />
      <PopularNewCars />
      <PopularElectric />
      <PopularUsedCars />
      <UsedCarsByBudget />  
      <BrowseByCategory />
      <PopularCarPrices />
      <CarComparisons />  
      <PopularCarVideos />
      <CertifiedDealers />
      <LatestNews />
    </div>
  );
}
