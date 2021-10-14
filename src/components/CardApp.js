import "./CardApp.css"; 
import TextPresentation from './TextPresentation'; 
import CardContainer from './CardContainer';



function CardApp(props){
    return(
        <div className="CardApp" >
            <TextPresentation/>
            <CardContainer/>
        </div>
    )
}

export default CardApp; 

