import { useEffect, useRef } from "react";
import { RootState, useAppDispatch } from "../store/store";
import { getTrendingVideos } from "../store/slices/api_slice";
import { useSelector } from "react-redux";
import { IMAGE_BASE_URL } from "../services/endpoints";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi";

const Slider = () => {
  const {  trendingVideos } = useSelector(
    (store: RootState) => store.api
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTrendingVideos());
  }, [dispatch]);
  const screenWidth = window.innerWidth;
  const elementRef = useRef<HTMLInputElement>(null);
  const sliderLeft = (element: HTMLInputElement) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderRight = (element: HTMLInputElement) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div>
      <HiChevronLeft
        onClick={() => sliderLeft(elementRef.current!)}
        className="hidden md:block absolute mx-8  mt-[150px] cursor-pointer   text-white text-4xl"
      />
      <HiChevronRight
        onClick={() => sliderRight(elementRef.current!)}
        className="hidden md:block absolute right-0 mx-8  mt-[150px] cursor-pointer   text-white text-4xl"
      />
      <div
        className=" flex overflow-x-auto w-full px-16 py-4 scrollbar-hide"
        ref={elementRef}
      >
        {trendingVideos.map((e) => (
          <img
            key={e.id}
            className="min-w-full md:h-[340px] object-cover object-left-top rounded-lg mr-5 hover:border-4 border-gray-400
            transition-all duration-100 ease-in-out"
            src={IMAGE_BASE_URL + e.backdrop_path}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
