import React, { useEffect, useState } from "react";
import axios from "axios";
import moviesArray from "../data/OnLoadData";
import Button from "../components/Button";
import MovieSwiper from '../components/MovieSwiper'

function Banner() {
  const [movies, SetMovies] = useState([]);
  const [objects, setObjects] = useState([]);

  let descritpion = "";

  let Index = Math.floor(Math.random() * moviesArray.length);
  descritpion += moviesArray[Index].description || "";

  console.log(objects);

  const getMovies = async () => {
    const newReleases =
      "https://api.watchmode.com/v1/releases/?apiKey=8JDf3mfCwTK3LAGJwIPEkrcFQHiSWqYXZbNOK3po&";

    const res = await axios.get(newReleases);
    const { releases } = res.data;
    console.log(releases);

    SetMovies(releases);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleSlideChange = (id) => {
    const object = movies.find((item) => {
      return item.id === id;
    });

    setObjects([object]);
  };

  return (
    <div className="banner w-full min-h-[100vh] relative duration-6 p-[0 100px] overflow-hidden text-gray-50 mt-10">
      {objects.map((item) => {
        console.log(item);
        return (
          <div
            className="movie w-full h-full flex justify-between items-center relative pb-[100px] mt-10"
            key={item.id}
          >
            <img
              src={item.poster_url}
              alt=""
              className="bg-img image w-full h-full absolute top-0 left-0 object-cover object-center"
            />

            <div className="container-fluid mt-[5rem] flex flex-col gap-[10rem]  justify-between items-center w-full px-14 lg:flex-row relative z-[1000]">
              {/* First Row */}
              <div className="row lg:w-[50%] w-full lg:text-left text-center">
                <div className="content max-w-[550px] px-10">
                  <h1 className="movie-title lg:max-w-[400px] mb-[20px] lg:text-5xl text-4xl text-yellow-500 ml-6 leading-[5rem]">
                    {item.title}
                  </h1>
                  <h4 className="text-[30px] font-bold text-gray-300">
                    <span>{item.source_release_date}</span>
                    <span className="bg-red-800 text-gray italic mx-2">
                      {item.tmdb_type}
                    </span>
                    <span>length</span>
                  </h4>
                  <p>{descritpion}</p>

                  <div className="flex gap-2 mt-5">
                    <Button text="Book" bgColor="white" />
                    <Button text="My List" bgColor="yellow" />
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="row lg:w-[50%] w-full flex flex-col items-center text-center">
                <h2 className="text-7xl font-bold text-wrap mt-5">
                  {item.source_release_date
                    ? item.source_release_date
                    : "No Release Date Found!"}
                </h2>
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <a
                  href="#"
                  className="flex items-center gap-5 text-white hover:text-yellow-500 flex-col absolute bottom-0 "
                >
                  <i className="playBtn ri-play-circle-line text-5xl"></i>
                  <h5 className="text-xl text-red-600 font-bold">
                    Watch Trailer!
                  </h5>
                </a>
              </div>
            </div>
          </div>
        );
      })}

      {/* Conditionally render MovieSwiper only if movies array has content */}
      {movies && movies.length > 0 && (

        <MovieSwiper slides={movies} slideChange={handleSlideChange} />

      )}
    </div>
  );
}

export default Banner;
