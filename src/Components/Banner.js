import { useEffect, useState } from 'react';
import './Banner.css';


function truncate(description) {
    return (
        description.length<=150 ? description :
        description.substr(0, 150) + "..."
    ); 
}

export function Banner({randomRequest}) {

    
    const baseURL = "https://api.themoviedb.org/3/";
    const img_baseURL = "https://image.tmdb.org/t/p/w500";

    const [movieBanner, setMovieBanner] = useState([]);

    useEffect( ()=> {

        const fetchData = async() => {
            await fetch(baseURL + randomRequest)
            .then(response => response.json() )
            .then( data => {
                //console.log("DATA RANDOM ", data.results);

                const movieBanner = data.results[ Math.floor( Math.random()*(data.results.length -1) ) ];
                //console.log("movieBanner.title ", movieBanner.title);
                setMovieBanner(movieBanner);
            });
        }
        fetchData();

    }, [randomRequest]);
    
   /*
    const style = {
        background: `#ffffff url(${this.state.url})`,
        backgroundPosition: `${this.state.x}% ${this.state.y}%`,
        backgroundSize: 'cover'
    };*/

    /*
    https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg
    
    background: 'url("' + `${img_baseURL + movieBanner.poster_path}` + '")',
*/
//const ur = "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"; //img_baseURL + movieBanner.poster_path;
//console.log("teste", ur);
    

    return (
        <div>
            { !(movieBanner?.poster_path)
            
            ? 
                (
                    <div>Loading</div>
                ):
                (



                    <div className="Banner" style={{
                        background: 'url("' + img_baseURL + movieBanner.backdrop_path + '")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        //
                    }}>
                        <div className="Banner__Info" >
                            <h1>{movieBanner?.title}</h1>
                            <div>
                                <button>Play</button>
                                <button>My List</button>
                            </div>
                            <p>{truncate(movieBanner?.overview)}</p>
                        </div>

                        <div className="Banner--shadow"></div>
                    </div>


                )
            }
                

        
        </div>
    )
}