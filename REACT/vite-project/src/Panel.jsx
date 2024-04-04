import './panel.css';

function Panel(props){
    return(
        <a href="">
            <div className='contents'>
                <div className="texts">
                    <h1>{props.title}</h1>
                    <h2>{props.date}</h2>
                    <p>{props.description}</p>
                </div>
                <img id='preview-photo' src={props.background} alt="" />
            </div>
        </a>
    );
}


export default Panel;