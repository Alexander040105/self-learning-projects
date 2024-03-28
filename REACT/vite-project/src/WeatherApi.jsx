import './weather.css';
function WeatherApi(props){
    return(
        <div className="contents">
            <div className="weatherDetails">
                <h2 id="country">{props.countryName}</h2>
                <img src={props.weatherImage} alt="" id="weatherIcon" style="display:none;"/>
                <h1 id="temperature">{props.temperature}</h1>
                <h2 id='typeWeather'>{props.typeWeather}</h2>
            </div>

            <div className="coordinates">
                <div className="latitude">
                    <h2 id="latitude">{props.latitudeValue}</h2>
                    <h3 id="latLabel" style="display: none;">Latitude</h3>
                </div>

                <div className="longitude">
                    <h2 id='longitude'>{props.longitudeValue}</h2>
                    <h3 id="lonLabel" style="display: none;">Longitude</h3>
                </div>
            </div>

            <div className="search">
                <input type="text" id="countryName" placeholder='Enter a city/country' />
                <button id="search">Search</button>
                <button id="darkMode" className="material-symbols-outlined">dark_mode</button>
            </div>
        </div>
    );
}


export default WeatherApi;