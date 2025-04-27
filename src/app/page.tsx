import Header from "@/components/home/header";
import dynamic from 'next/dynamic';


const Services = dynamic(() => import('@/components/home/services'));
const Brands = dynamic(() => import('@/components/home/brand'));
const PopularNewCars = dynamic(() => import('@/components/home/popular-new-cars'));
const PopularElectric = dynamic(() => import('@/components/home/popular-electric'));
const PopularUsedCars = dynamic(() => import('@/components/home/popular-used-cars'));
const UsedCarsByBudget = dynamic(() => import('@/components/home/usedCars-by-budget'));
const BrowseByCategory = dynamic(() => import('@/components/home/browse-by-category'));
const PopularCarPrices = dynamic(() => import('@/components/home/popular-car-prices'));
const CarComparisons = dynamic(() => import('@/components/home/car-comparisons'));
const PopularCarVideos = dynamic(() => import('@/components/home/popular-car-videos'));
const CertifiedDealers = dynamic(() => import('@/components/home/certified-dealers'));
const LatestNews = dynamic(() => import('@/components/home/latest-news'));

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
