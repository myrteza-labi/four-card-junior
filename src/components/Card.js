import "./Card.css"; 
import Picture from './Picture'; 

function Card(props){
    return(
        <div className={"Card " + props.color} >
            <div className="cardTextContainer" >
                <h2 className="cardTitle" >{props.title}</h2>
                <p className="cardParagraph" >{props.text}</p>
            </div>
            <Picture src={props.src} alt={props.alt}/>
        </div>
    )
}

export default Card; 