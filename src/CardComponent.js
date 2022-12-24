const CardComponent=(props)=>{
    debugger;
    return (
        <div id="card" className="cardClass">
            <img src={props.teamMembers.img}/>
            <h2>{props.teamMembers.name}</h2>
            <h3>{props.teamMembers.company}</h3>
            <h4>{props.teamMembers.address}</h4>
            <h5>{props.teamMembers.designation}</h5>
        </div>
    )
};

export default CardComponent;