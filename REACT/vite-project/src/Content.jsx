import './content.css';

function Content(props){
    return(
        <div className="blog-post">
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default Content;