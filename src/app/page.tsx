import Header from "@/components/Header";
import dynamic from 'next/dynamic';


const Services = dynamic(() => import('@/components/Services'));
const Brands = dynamic(() => import('@/components/Brands'));
const PopularNewCars = dynamic(() => import('@/components/PopularNewCars'));
const PopularElectric = dynamic(() => import('@/components/PopularElectric'));
const PopularUsedCars = dynamic(() => import('@/components/PopularUsedCars'));
const UsedCarsByBudget = dynamic(() => import('@/components/UsedCarsByBudget'));
const BrowseByCategory = dynamic(() => import('@/components/BrowseByCategory'));
const PopularCarPrices = dynamic(() => import('@/components/PopularCarPrices'));
const CarComparisons = dynamic(() => import('@/components/CarComparisons'));
const PopularCarVideos = dynamic(() => import('@/components/PopularCarVideos'));
const CertifiedDealers = dynamic(() => import('@/components/CertifiedDealers'));
const LatestNews = dynamic(() => import('@/components/LatestNews'));

export default function Home() {
  return (
    <div>
      <div className="relative ">
        <Header />
  

      </div>
      <Services />
      <Brands />

      <PopularNewCars />
      <div className=" sm:hidden bg-gray-50 py-2"></div>
      <PopularElectric />
      <PopularUsedCars />

      <UsedCarsByBudget />  

      <div className=" sm:hidden bg-gray-50 py-2"></div>

      <BrowseByCategory />
      <div className=" sm:hidden bg-gray-50 py-2"></div>


      <PopularCarPrices />


      <CarComparisons />  
      <div className=" sm:hidden bg-gray-50 py-2"></div>

      <PopularCarVideos />
      
      <CertifiedDealers />

      <div className=" sm:hidden bg-gray-50 py-2"></div>

      <LatestNews />
    </div>
  );
}
