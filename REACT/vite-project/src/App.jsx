import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx'
import Student from './Student.jsx';
import spongebob from './assets/spongebob.png';
import patrick from './assets/patrick.png';
import squidward from './assets/squidward.jpg';
import List from './List.jsx';


function App() {
  const fruit = [{id: 1,name:"Apple", calories: 95},{id: 2,name:"Banana", calories:105}, {id: 3,name:"coconut", calories: 159}];
  const vegetables = [{id: 4,name:"Apple", calories: 95},{id: 5,name:"Banana", calories:105}, {id: 6,name:"coconut", calories: 159}];

  return(
    <>
    <Header/>
    {/* <Food/> */}
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Student name="Spongebob" age={30} isStudent={false} photo={spongebob} />
    <Student name="Patrick" age={35} isStudent={true} photo={patrick}/>
    <Student name="Squidward" age={50} isStudent={false} photo={squidward} />
    <List items={fruit} category="Fruit"/>
    <List items={vegetables} category="Vegetables"/>
    {/* <Footer/> */}
    </>
  );
}

export default App
