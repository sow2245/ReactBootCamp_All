import React, { Fragment } from "react";
import ReactDom from "react-dom/client";
import CardComponent from "./CardComponent.js";
import sowmyaImg from "./Img/Sowmya.png";
import data from "./data.json"
import { title } from "./Constants.js";
import SearchComponent from "./SearchComponent.js";
import { useState } from "react";

const HeadingComponent=()=>(
<div id="title" className="title-class" tabIndex="1">
    <h2>{title}</h2>
</div>
);

const CardContainer=({filteredData})=>
    filteredData.map((teamMembers)=>(
        <CardComponent teamMembers={teamMembers} key={teamMembers.id}/>
    ));

const BodyComponent=()=>{
    const [filteredData,setFilteredData]=useState(data);
    return(
    <div className="card-container">
        <SearchComponent setFilteredData={setFilteredData}/>
        <CardContainer filteredData={filteredData}/>
    </div>);
};


const AppLayout =()=>(
    <>
    <HeadingComponent/>
    <BodyComponent/>
    </>
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);