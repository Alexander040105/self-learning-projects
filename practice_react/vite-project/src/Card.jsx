

function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={props.photo} alt="" />
            <div className="label">
                <h1 className="photo-name">{props.name}</h1>
            </div>
            {/* <h2 className="card-title">Nico Robin</h2>
            <p className="card-description">Hakdog Hakdog hakdigi</p> */}
        </div>
    );
}

export default Card;