import Header from './Header.jsx';
import Hero from './Hero.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx'
import Slider from './Slider.jsx'
import Student from './Student.jsx';
import spongebob from './assets/spongebob.png';
import patrick from './assets/patrick.png';
import squidward from './assets/squidward.jpg';
import nicoRobin from './assets/nico-robin.jpg';
import List from './List.jsx';
import WeatherApi from './WeatherApi.jsx';


function App() {
  const fruit = [{id: 1,name:"Apple", calories: 95},{id: 2,name:"Banana", calories:105}, {id: 3,name:"coconut", calories: 159}];
  const vegetables = [{id: 4,name:"Apple", calories: 95},{id: 5,name:"Banana", calories:105}, {id: 6,name:"coconut", calories: 159}];

  async function defaultHomePage(){
    const apiKey = "67b4cb11470a49dd817142325241003";
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=philippines`);
    const data = await response.json();
    let currentData = data.current.condition.text;
    let lat = data.location.lat;
    let lon = data.location.lon;
    let icon = data.current.condition.icon;
    let temp = data.current.temp_c;

    if(!response.ok){
      throw new Error('Could not fetch the data or resource');
    }
  }

  defaultHomePage();

  return(
    <>
    <WeatherApi countryName="Philippines" weatherImage={icon}/>
    {/* <Header category1="Home" category2="About Us" category3="Services" category4="Contact Us"/>
    <Hero/> */}
    {/* <Food/> */}
    {/* <div className="cards">
      <Slider/>
    </div> */}
    
    {/* <List items={fruit} category="Fruit"/>
    <List items={vegetables} category="Vegetables"/> */}
    {/* <Footer/> */}
    </>
  );
}

export default App
