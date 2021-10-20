import "./css/index.css";
import Heading from "./component/heading.jsx";
import tours from "./data/tour";
import TourContainer from "./component/tourContainer.jsx";
function App() {
  return (

      <div className="container">
        <Heading content={"Our Tours"}></Heading>
        {
        tours.map((tour,i)=>{
          console.log(tour)
          return <TourContainer url={tour.url} description={tour.description} title={tour.title} price={tour.price} key={i}></TourContainer>
        })
        }
      

      </div>
  );
}

export default App;
