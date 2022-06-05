import './css/home.css'
import {useState, useEffect, useRef} from 'react';

const delay = 5000;

function Slideshow(props) {

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
        props.setIndex((prevIndex) =>
          prevIndex === props.colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
    resetTimeout();
    };
  }, [props.index]);

}

const Home = () => {

  const [index, setIndex] = useState(0);
  const [colors, setColors] = useState(["blue", "red", "blue", "red", "blue"])
  const [text, setText] = useState(["Since 2009, there have been 274 mass shootings in the United States, resulting in 1536 people shot and killed and 983 people shot and wounded.", "1 in 4 mass shooting victims were children and teens.", "1 in 3 mass shootings involved a shooter that was legally prohibited from possessing firearms at the time of the shooting.", "In 56 percent of mass shootings, the shooter exhibited dangerous warning signs before the shooting.", "Between 2009 and 2020, the 5 deadliest mass shootings all involved assault weapons and/or high-capacity magazines."]);

  return (
    <>
    <div className="home-page-header">
    <h1 className="text">America's Gun Problem</h1>
    <Slideshow setIndex={setIndex} colors={colors} text={text}/>
		</div>

      <div className="slideshow">
        {colors.map((backgroundColor, index) => {
          return (
            <>
          <div className="slideshowSlider" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
            <div className={backgroundColor}>
              <p>{backgroundColor}</p>
            </div>

        </div>
        </>
        )})}


        <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {setIndex(idx);}}>
          </div>
        ))}
      </div>
    </div>
  </>
)}

export default Home

// {text.map((text, index) => {
//
// )}}

// const colors = ["#0088EE", "#FF0000", "#0088EE", "#FF0000", "#0088EE"];
// const text = [
//   "Since 2009, there have been 274 mass shootings in the United States, resulting in 1536 people shot and killed and 983 people shot and wounded.",
//   "1 in 4 mass shooting victims were children and teens.",
//   "1 in 3 mass shootings involved a shooter that was legally prohibited from possessing firearms at the time of the shooting.",
//   "In 56 percent of mass shootings, the shooter exhibited dangerous warning signs before the shooting.",
//   "Between 2009 and 2020, the 5 deadliest mass shootings all involved assault weapons and/or high-capacity magazines."
// ]
// const colors = [
//   {
//     color: "#0088EE",
//     text: "Since 2009, there have been 274 mass shootings in the United States, resulting in 1536 people shot and killed and 983 people shot and wounded."
//   },
//   {
//     color: "#FF0000",
//     text: "1 in 4 mass shooting victims were children and teens."
//   },
//   {
//     color: "#0088EE",
//     text: "1 in 3 mass shootings involved a shooter that was legally prohibited from possessing firearms at the time of the shooting."
//   },
//   {
//     color: "#FF0000",
//     text: "In 56 percent of mass shootings, the shooter exhibited dangerous warning signs before the shooting."
//   },
//   {
//     color: "#0088EE",
//     text: "Between 2009 and 2020, the 5 deadliest mass shootings all involved assault weapons and/or high-capacity magazines."
//   }
// ]
