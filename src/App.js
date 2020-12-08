import { RowMovies } from './Components/RowMovies';
import { Banner } from './Components/Banner';
import requests from './requests';
import './App.css';
import { Navbar } from './Components/Navbar';

/*
movie-trailer
react-youtube
*/
function App() {

  
// 2.12.33


  /*console.log("rand: ",
    Math.ceil(
    Math.random() * (Object.keys(requests).length-1)
    )
    );*/
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

      {/* Banner */}
      <Banner randomRequest={
        /*Object.values(requests)[
        Math.ceil( Math.random() * (Object.keys(requests).length-1) )]
        */
       Object.values(requests)[0]
       } />


      {/* List movies by Type */}
      { 
      Object.entries(requests).map( (movie,index) => {
        return <RowMovies key={index} title={movie[0]} fetchUrl={movie[1]} />;
      })
      }
      

    </div>
  );
}

export default App;
