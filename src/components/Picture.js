import "./Picture.css"; 

function Picture(props){
    return(
        <div className="Picture" >
            <img className="pictureimg" src={props.src} alt={props.alt}/>
        </div>
    )
}

export default Picture; 