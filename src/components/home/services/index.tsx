


const Services = () => {

    const servicesData = [
        {
          id: 1,
          title: "SELL YOUR CAR",
          description: "Sell your car 100% absolutely free on YallaMotor.",
          image: "/service-sell.png",
          link: "#",
        },
        {
          id: 2,
          title: "VEHICLE REPORT",
          description: "Get a full report on your vehicle's history and condition.",
          image: "/service-report.png",
          link: "#",
        },
        {
          id: 3,
          title: "CAR VALUATION",
          description: "Find out the accurate market value of your car today.",
          image: "/service-valuation.png",
          link: "#",
        },
        {
            id: 4,
            title: "VEHICLE REPORT",
            description: "Get a full report on your vehicle's history and condition.",
            image: "/service-report.png",
            link: "#",
          },
        {
            id: 5,
            title: "VEHICLE REPORT",
            description: "Get a full report on your vehicle's history and condition.",
            image: "/service-report.png",
            link: "#",
          },
        {
            id: 6,
            title: "VEHICLE REPORT",
            description: "Get a full report on your vehicle's history and condition.",
            image: "/service-report.png",
            link: "#",
          },
      ];
      


    
      return (
        <>
          <div className="w-full text-start overflow-hidden mt-10  lg:mt-20">
            <h2 className="text-[18px] lg:text-[33px] mb-5 lg:mb-10 ml-5 lg:ml-18 font-bold">
              Yallamotor Services
            </h2>
          </div>
    
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden px-5 lg:px-20">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="w-full sm:w-[442px] p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white border border-gray-300 rounded-lg shadow-md transition-transform "
              >
                <div className="w-full sm:w-[150px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col space-y-2 text-left">
                  <h3 className="text-[15px] lg:text-[16px] font-semibold">{service.title}</h3>
                  <p className="hidden lg:block text-[14px] text-[#222] max-w-[250px]">{service.description}</p>
                  <a href={service.link} className="text-[#124d99] font-bold text-sm">
                    Explore More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
     )    
}   

export default Services;




