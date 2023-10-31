import { IMAGE_BASE_URL } from "../services/endpoints";
import { GenresByIdType } from "../store/slices/api_slice";

type MovieCardType = {
  item: GenresByIdType;
};

const MovieCard = ({ item }: MovieCardType) => {
  return (  
    <img
      className="w-[180px] md:w-[270px] rounded-lg hover:border-[3px] border-gray-400  hover:scale-110 duration-150 transition-all ease-in cursor-pointer"
      src={IMAGE_BASE_URL + item.poster_path}
      alt=""
    />
  );
};

export default MovieCard;
