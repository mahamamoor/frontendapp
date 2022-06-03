import './css/home.css'
import {useState, useEffect, useRef} from 'react';

const colors = ["#0088EE", "#FF0000", "#0088EE", "#FF0000", "#0088EE"];
const stats = [
  "Since 2009, there have been 274 mass shootings in the US, resulting in 1536 people shot & killed & 983 people shot & wounded.",
  "1 in 4 mass shooting victims were children and teens. An estimated three million children witness a shooting each year.",
  "1 in 3 mass shootings involved a shooter that was legally prohibited from possessing firearms at the time of the shooting.",
  "In 56 percent of mass shootings, the shooter exhibited dangerous warning signs before the shooting.",
  "Between 2009 and 2020, the 5 deadliest mass shootings all involved assault weapons and/or high-capacity magazines."
];
const delay = 5000;

function Slideshow() {

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
    resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
      {colors.map((backgroundColor, index) => (
        <div className="slide" key={index} style={{backgroundColor}}>
        <p className="stats">{stats[index]}</p>
        </div>
      ))}
      </div>

      <div className="slideshowDots">
      {colors.map((_, idx) => (
        <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {setIndex(idx);}}>
        </div>
      ))}
    </div>
  </div>
  )
}

const Home = () => {
  return (
    <div className="home-page-header">
    <h1>America's Gun Problem</h1>
    {Slideshow()}
		</div>
)}

export default Home
