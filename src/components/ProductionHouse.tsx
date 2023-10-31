import { productionHouseList } from "../services/fake_api";

const ProductionHouse = () => {
  const productHouse = productionHouseList;

  return (
    <div className="relative flex gap-5  md:gap-8 p-2 px-5 md:px-16">
      {productHouse.map((e) => (
        <div
          key={e.id}
          className=" border-2 border-gray-600  rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl
           shadow-gray-800 bg-[#242424] "
        >
          <video
            src={e.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 rounded-md  z-0 opacity-0 hover:opacity-50 "
          />
          <img src={e.image} className="w-full z-[1] opacity-100 " alt="" />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
