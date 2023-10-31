import { IMAGE_BASE_URL } from "../services/endpoints";
import { MovieCardType } from "./MovieCard";

const HrMovieCard = ({ item }: MovieCardType) => {
  return (
    <section className="hover:scale-110 duration-150 transition-all ease-in ">
      <img
        className="w-[180px] md:w-[270px] rounded-lg hover:border-[3px] border-gray-400  cursor-pointer"
        src={IMAGE_BASE_URL + item.backdrop_path}
        alt=""
      />
      <h2 className="w-[180px] md:w-[270px]  text-white text-xl font-medium text-center m-5">
        {item.title}
      </h2>
    </section>
  );
};

export default HrMovieCard;
