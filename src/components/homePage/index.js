import {Component} from "react"
import Cookies from "js-cookie"

import Header from "../header"
import Footer from "../footer"
import ReactSlick from "../ReactSlick"

import "./index.css"


class Home extends Component {
   state = {
      moviesList: []
   }

   componentDidMount = () => {
       this.getMoiesList()
   }

   getMoiesList = async () => {
      const url = "https://apis.ccbp.in/movies-app/trending-movies"
      const jwtToken = Cookies.get("JwtToken");  // Get the JWT token from cookies

      const options = {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${jwtToken}`,  // Use the JWT token here
          'Content-Type': 'application/json'
         }
      };
      const response = await fetch(url,options)
      const data = await response.json()
      //console.log(data.results)
      const updatedList = data.results.map(each => ({
         backdropPath : each.backdrop_path,
         id: each.id,
         overview: each.overview,
         posterPath: each.poster_path, 
         title: each.title
      }))
      console.log(updatedList)
      this.setState({moviesList: data.results})

      }

   render(){
      const {moviesList} = this.state
      return(
         <div>
         <div className="Home-con">
         <Header />
         <div className="banner-content">
            <h1 className="super">Super Man</h1>
            <p className="description">Superman is a fictional superhero who first appeared in American comic books published by DC Comics.</p>
         </div>  
       </div>
       <div className="bottom-content">
            <h3>Trending Now</h3>
            <ReactSlick trendingList = {moviesList} />
            <h3>Originals </h3>
            <ReactSlick/>
         </div>
       <Footer/>
       </div>
      )
   }
}

export default Home