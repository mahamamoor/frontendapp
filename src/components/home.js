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

const Home = (props) => {
  return (
    <div className="home-page-header">
    <h1>America's Gun Problem</h1>
    {Slideshow()}
    <div className="showButtons">
      <button className="navButtons" onClick={props.showHome}>Home</button>
      <button className="navButtons" onClick={props.showMsa}>MSA</button>
      <button className="navButtons" onClick={props.showForum}>Forum</button>
      <button className="navButtons" onClick={props.showSenators}>Senators</button>
    </div>
    <div className="about-home-page">
    <h4>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</h4>
    </div>
		</div>
)}

export default Home
