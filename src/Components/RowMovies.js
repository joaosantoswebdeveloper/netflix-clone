import React, { useEffect, useState } from 'react';
import './RowMovies.css';
import YouTube from 'react-youtube';
import MovieTrailer from 'movie-trailer';

export function RowMovies({title, fetchUrl}) {
    
    const baseURL = "https://api.themoviedb.org/3/";
    const img_baseURL = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);
    const [displayTrailer, setDisplayTrailer] = useState(false);
    const [movieTrailerPrevious, setMovieTrailerPrevious] = useState("");
    const [movieTrailer, setMovieTrailer] = useState("");
    
    const opts = {
        height: '300',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    useEffect( ()=>{

        //console.log("URL: ", baseURL + fetchUrl);
        const data = async() => {
            await fetch(baseURL+fetchUrl)
            .then(response => response.json())
            .then(data => {
                //console.log("DATA ", data.results);
                setMovies(data.results);
            })
        }
        data();

    }, [fetchUrl]);

    const handleClick = (movie_original_title) => {
        //console.log("displayTrailer: ", displayTrailer + ",movie_original_title: ", movie_original_title + ",movieTrailerPrevious: ", movieTrailerPrevious);

        if(displayTrailer &&
            
            (movieTrailerPrevious===movie_original_title)&&(movieTrailerPrevious!=="")

            ){
            setDisplayTrailer(false);
            setMovieTrailer("");
            setMovieTrailerPrevious("");
        }
        else{
            setDisplayTrailer(true);

            const fetchTrailer = async() => {

                await MovieTrailer( movie_original_title )
                .then( response => {
                    //console.log("response", response);// https://www.youtube.com/watch?v=bu9e410C__I

                    const urlParams = new URLSearchParams(new URL(response).search);
                    const videoID = urlParams.get("v");
                    //console.log("videoID", videoID);
                    

                    setMovieTrailer(videoID);
                    setMovieTrailerPrevious(movie_original_title);
                })
                .catch(error => {
                    //console.log("error", error);
                });
            }
            fetchTrailer();
            
        };

    }
    
    return (
        <div className="rowMovies">
            <h1>{title}</h1>
            {movies&&
                <div className={title==="Trending" ? "moviesContainer isPoster" : "moviesContainer"}>
                    {movies.map( movie=>{
                    return <img src={img_baseURL + movie.poster_path} alt={movie.original_title} key={movie.original_title} onClick={ e=>{handleClick(
                        
                        movie.original_title
                    )}} />;
                })}
                </div>
                }
                {displayTrailer &&
                <div className="rowMovies__trailer">
                    {movieTrailer&&
                    <YouTube videoId={movieTrailer} opts={opts} />
                    }
                </div>}
        </div>
    )
        
}