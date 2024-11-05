import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


/* Add css to your project */
import "./index.css";

// const companyLogosData = [
//   {
//     id: "d14af630-5d22-4bfb-85dd-bb507b139b82",
//     company_logo_url:
//       "https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png"
//   },
//   {
//     id: "0a932287-8002-4fc8-95d1-8cbed3224e37",
//     company_logo_url:
//       "https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png"
//   },
//   {
//     id: "8211ce0c-d7dc-4d2b-8468-5e48ad9ae985",
//     company_logo_url:
//       "https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png"
//   },
//   {
//     id: "daa48153-3f16-4797-8469-5d63c9cba938",
//     company_logo_url:
//       "https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png"
//   },
//   {
//     id: "2f4b518e-29b3-45c3-a7a5-80929f7898d9",
//     company_logo_url:
//       "https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png"
//   },
//   {
//     id: "895b9b4d-a283-4ee1-9fb8-933a3c4b449c",
//     company_logo_url:
//       "https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png"
//   },
//   {
//     id: "a8c67fd0-bab9-46ec-95de-cbfa2e3473f6",
//     company_logo_url:
//       "https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png"
//   }
// ];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4, // Default for 1280px+ screens
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1279, // For screens between 769px and 1279px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For screens between 481px and 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // For screens 0px - 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

class ReactSlick extends Component {
  renderSlider = () => {

    const { trendingMovies} = this.props;
    const {moviesList} = trendingMovies
    console.log(moviesList)
    // console.log("React slick") 
    
    return (
      <Slider {...settings}>
         {moviesList.map((eachMovie) => {
          const { id, posterPath,title } = eachMovie; // Use trending list props instead of hardcoded data
        
          return (
            <div className="slick-item" key={id}>
             {/* <div><span style={{ backgroundImage: `url(${posterPath})` }} className="logo-image"></span>
             </div>  */}
             <img className="logo-image" src={posterPath} alt={title} /> 
            </div>
          );

        })}
      </Slider>
    );
  };

  render() {
    return (
      <div className="main-container2">
    
        <div className="slick-container">{this.renderSlider()}</div>
      </div>
    );
  }
}

export default ReactSlick;
