import profilePic from './assets/nico-robin.jpg';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="" />
            <h2 className="card-title">Nico Robin</h2>
            <p className="card-description">Hakdog Hakdog hakdigi</p>
        </div>
    );
}

export default Card;