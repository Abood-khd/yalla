const Brands = () => {
    return (
        <div className="bg-gray-50 p-10 px-20 mt-10">

            <h2 className="text-2xl text-center lg:text-2xl font-bold lg:text-start mb-10 text-[#000]">Prices, Specs & Features of Popular Brands in UAE</h2>
            <div className="flex justify-center items-center mb-12">
                <div className=" shadow-lg rounded-lg text-center  border-gray-200">
                    <img src="/Screenshot 2025-04-23 150153.png" alt="Geely" className=" object-contain w-[150px] h-[150px]" />

                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
             
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
             
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                        <img src={`/image.png`} alt={'image-brand'} className="mx-auto mb-3 w-full h-full object-contain" />
                  
                   
            </div>
            <div className="flex lg:justify-start justify-center mt-10">
                <button className=" text-[#124d99] text-sm border border-[#124d99]  px-5 py-1 rounded-sm shadow-md transition">Show More</button>
            </div>
        </div>
    )
}   

export default Brands;