import Card from './Card'
import nicoRobin from './assets/nico-robin.jpg';
import yoon from './assets/yooniecutie.jfif';
import aki from './assets/akeishacutie.jpg';

function Collection(){
    return(
        <section className='collection'>
            <h1 className='title'>Cuties</h1>
            <p className='collection-descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

            <div className="cards">
                <Card photo={nicoRobin} name="Nico Robin"/>
                <Card photo={aki} name="Aki"/>
                <Card photo={yoon} name="Yoon"/>
            </div>
        </section>
    );
}

export default Collection