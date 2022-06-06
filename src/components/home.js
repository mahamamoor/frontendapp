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
        <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {setIndex(idx)}>
        </div>
      ))}
    </div>
  </div>
  )
}

const Home = (props) => {
  return (
    <div className="slideshow-page-header">
    {Slideshow()}
    <div className="home-page-buttons">
      <button className="home-button" onClick={props.showMsa}>MSA</button>
      <button className="home-button" onClick={props.showForum}>Forum</button>
      <button className="home-button" onClick={props.showSenators}>Senators</button>
    </div>
    <div className="about-home-page">
    <h4 className="about-app">Mass shootings have been on the rise in recent years. In 2022, there have been over 200 mass shootings in America. A mass shooting is defined as an incident resulting in 4 or more victims at the same general time and location, not including the shooter. We wanted to turn to the people and ask what can we do when our political representatives are not speaking up? This app serves as a tool to educate, heal and create change surrounding gun control laws. Our Mass shootings in America (MSA) page is there to bring awareness on the gravity of the issue. We provide a list of Senators so that you can search and advocate for stricter gun laws in your state, in hopes of gaining momentum in gun policy. Please utilize our mental health forum as a safe space to heal the hurt around us.</h4>
    </div>
    <div className="sources">
    <h4>Sources:</h4>
      <p>“Stanford Mass Shootings in America, courtesy of the Stanford Geospatial Center and Stanford Libraries”. https://github.com/StanfordGeospatialCenter/MSA. </p>
      <p>Cochrane, Emily, et al. "Where Senate Republicans Stand on Gun Legislation." <i>The New York Times,</i> https://www.nytimes.com/interactive/2022/05/25/us/gun-control-republican-senators.html</p>
      <p>"Mother Jones: A Guide to Mass Shootings in America." https://www.motherjones.com/politics/2012/07/mass-shootings-map/</p>
      <p>"Mass Shootings." <i>Everytown,</i> https://www.everytown.org/issues/mass-shootings/</p>
      <p>Republican senators: Republican Leadership. https://www.republicanleader.senate.gov/senate-resources/republican-senators</p>
      <p>https://www.senate.gov/general/contact_information/senators_cfm.xml</p>
    </div>
    <div className="footer">
    <footer>Created by <strong> Nikki Calamia </strong> and <strong> Maha Mamoor </strong>. June 2022.</footer>
    </div>
		</div>
)}

export default Home
