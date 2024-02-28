import './button.css'

function Buttonbro(props){
    
    return(
        <div>
            <button className="formatted-button">{props.buttonName}</button>
        </div>
    );
}
export default Buttonbro