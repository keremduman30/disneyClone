import { genreList } from "../services/fake_api";
import MovieList from "./MovieList";

const GenreMoviesList = () => {
  return (
    <div>
      {genreList.map((e,i) => (
        <div key={e.id} className="p-8 px-8 md:px-16">
          <h2 className="text-white text-[30px] font-bold my-5">{e.name}</h2>
          <MovieList id={e.id}  index={i} />
        </div>
      ))}
    </div>
  );
};

export default GenreMoviesList;
