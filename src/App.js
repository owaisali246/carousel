import "./App.css";
// import Carousel from "react-elastic-carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Item from "./Items";
import "./App.css";
const img_blogs = require("./images/Blog.png");

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const content = [
  { image: img_blogs },
  { image: img_blogs },
  { image: img_blogs },
  { image: img_blogs },
  { image: img_blogs },
  { image: img_blogs },
  { image: img_blogs },
];

function App() {
  return (
    <div className="main_div">
      {/* <div className="team_heading">
        <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      </div>
       */}
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showArrows={false}
        className={"carouselHome"}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={100}
        infiniteLoop={true}
      >
        {content.map((img, index) => {
          return (
            <div key={index} className="carousel_item">
              <img src={img.image} alt="no-text" className="carousel_img" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default App;
