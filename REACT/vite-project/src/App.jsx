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
import Panel from './Panel.jsx';
import Content from './Content.jsx';
import bg from './assets/mimikyuu.jfif';
import './App.css'



function App() {
  let content = `This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported.\n\n\n You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. \n Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. \n Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.`;


  const fruit = [{id: 1,name:"Apple", calories: 95},{id: 2,name:"Banana", calories:105}, {id: 3,name:"coconut", calories: 159}];
  const vegetables = [{id: 4,name:"Apple", calories: 95},{id: 5,name:"Banana", calories:105}, {id: 6,name:"coconut", calories: 159}];


  return(
    <>
    <Header category1="Home" category2="About Us" category3="Services" category4="Contact Us"/>
    <Hero/>
    <div className="two-panels">
      <Panel title="Hello" date="April 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" background={bg}/>
      <Panel title="Hi" date="April 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" background={bg}/>
    </div>

    <div className="home-contents">
      <div className="blog-posts">
        <Content title="Blog Post Header" date="April 2, 2024 by Drake" content={content}/>
        <Content title="Blog Post Header" date="April 2, 2024 by Drake" content={content}/>
        <Content title="Blog Post Header" date="April 2, 2024 by Drake" content={content}/>
      </div>

      <div className="side-panel">
        <Student name="Spongebob" age={30} isStudent={false} photo={spongebob} />
        <List title="Archives" date1="November 2023" date2="December 2023" date3="January 2024" date4="February 2024" date5="March 2024"/>
        <List title="Socials" date1="Twitter" date2="Facebook" date3="YouTube" date4="Instagram"/>
      </div>
    </div>
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
