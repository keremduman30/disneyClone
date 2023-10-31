import { useEffect, useRef, useState } from "react";
import { GenresByIdType } from "../store/slices/api_slice";
import MovieCard from "./MovieCard";
import { requestApi } from "../services/global_api";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

type MovieListType = {
  id: number;
};

const MovieList = ({ id }: MovieListType) => {
  const [movieList, setmovieList] = useState<GenresByIdType[]>([]);
  const elementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const getMovies = async () => {
      const result = await requestApi.get(
        `/discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&with_genres=${id}`
      );
      setmovieList(result.data.results);
    };
    getMovies();
  }, [id]);

  const slideRight = (element: HTMLInputElement) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element: HTMLInputElement) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current!)}
        className="hidden md:block absolute mx-8  mt-[150px] cursor-pointer   text-white text-5xl z-10"
      />
      <div
        className="flex overflow-x-auto gap-10 scrollbar-hide scroll-smooth py-5 px-3"
        ref={elementRef}
      >
        {movieList.map((e) => (
          <MovieCard key={e.id} item={e} />
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current!)}
        className="hidden md:block absolute right-0 mx-8  mt-[300px] cursor-pointer text-white text-5xl z-10 "
      />
    </div>
  );
};

export default MovieList;
