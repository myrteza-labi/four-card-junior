import "./CardContainer.css"; 
import Card from './Card'; 
import iconSupervisor from '../images/icon-supervisor.svg'; 
import iconTeamBuilder from '../images/icon-team-builder.svg'; 
import iconKarma from '../images/icon-karma.svg'; 
import iconCalculator from '../images/icon-calculator.svg'; 

function CardContainer(props){
    return(
        <section className="CardContainer" >

                <Card   title={"Supervisor"} src={iconSupervisor} alt={"supervisor"} color={"green"}
                        text={"Monitors activity to identify project roadblocks"} />

                <div className="twoCardContainer" >
                        <Card   title={"Team Builder"} src={iconTeamBuilder} alt={"builder team"} color={"red"}
                                text={"Scans our talent network to create the optimal team for your project"} />
                        
                        <Card   title={"Karma"} src={iconKarma} alt={"karma"} color={"orange"}
                                text={"Regularly evaluates our talent to ensure quality"}/>
                </div>
                

                <Card   title={"Calculator"} src={iconCalculator} alt={"calculator"} color={"blue"}
                        text={"Uses data from past projects to provide better delivery estimates"}/>
        </section>
    )
}

export default CardContainer; 


