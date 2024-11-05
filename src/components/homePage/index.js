import { Component } from "react";
import Cookies from "js-cookie";

import Banner from "../Banner";
import Footer from "../footer";
import ReactSlick from "../ReactSlick";
import OriginalsSlick from "../OriginalsSlick";

import "./index.css";

class Home extends Component {
   state = {
      moviesList: [], // Initialize as an array for trending movies list
     originalsMovieList : [], // Initialize as an array for originals movies list
   };

   componentDidMount = () => {
      this.getMoviesList();
      this.getOriginalMoviesList();
   };

   getMoviesList = async () => {
      const url = "https://apis.ccbp.in/movies-app/trending-movies";
      const jwtToken = Cookies.get("JwtToken"); // Get the JWT token from cookies

      const options = {
         method: "GET",
         headers: {
            Authorization: `Bearer ${jwtToken}`, // Use the JWT token here
            "Content-Type": "application/json",
         },
      };

      const response = await fetch(url, options);
      const data = await response.json();
     // console.log(data.results); // Check if data.results is an array it is an individual objects

      const updatedList = data.results.map((each) => ({
         backdropPath: each.backdrop_path,
         id: each.id,
         overview: each.overview,
         posterPath: each.poster_path,
         title: each.title,
      }));

     // console.log(updatedList); // Log to verify if updatedList is correct
      this.setState({ moviesList: updatedList }); // Set the state with updatedList, not data.results
   };

   getOriginalMoviesList = async () =>{
      const url = "https://apis.ccbp.in/movies-app/originals";
      const jwtToken = Cookies.get("JwtToken"); // Get the JWT token from cookies
      const options = {
         method: "GET",
         headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type" : "application/json",
         }
      }

      const response = await fetch(url,options);
      const data = await response.json()

      //console.log(data) check the data in console

      const updatedList = data.results.map((each) => ({
         backdropPath: each.backdrop_path,
         id: each.id,
         overview: each.overview,
         posterPath: each.poster_path,
         title: each.title,
      }));

      console.log(updatedList); // Log to verify if updatedList is correct
      this.setState({ originalsMovieList : updatedList }); // Set the state with updatedList, not data.results
   }

   render() {
      const { moviesList,originalsMovieList } = this.state;
      const trendingMoviesList = {moviesList} //add the list in a object
      const originalsList = {originalsMovieList}
      console.log(originalsList)
     console.log({moviesList}); // Log to see if moviesList is populated correctly

      return (
         <div>
           <Banner />
            <div className="bottom-content">
               <div className="slider-container">
               <h3 className="trending-name">Trending Now</h3>
               {/* Render trending movies here */}
               {/* {moviesList.map((movie) => (
                  console.log(movie)
          ))} */}
               <ReactSlick trendingMovies={trendingMoviesList} /> 

               <h3 className="trending-name">Originals </h3>
              <OriginalsSlick originals={originalsList} /> 
                
               <Footer />
            </div>
            
         </div>
         </div> 
      );
   }
}

export default Home;
