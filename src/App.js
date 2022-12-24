import React, { Fragment } from "react";
import ReactDom from "react-dom/client";
import CardComponent from "./CardComponent.js";
import sowmyaImg from "./Img/Sowmya.png"

const title = "Strom Troopers";

const data=[
    {
        id:"00001",
        // img:sowmyaImg,
        name :"Punuru Sowmya Reddy",
        company: "Landmark Health Pvt Ltd",
        address :"Bangalore",
        designation:"Senior Software Engineer"
    },
    {
        id:"00002",
        img:"",
        name: "Shivam Pandey",
        company: "Korber Supply Chain",
        address: "Mirzapur",
        designation:"Software Engineer"
    },
    {
        id:"00003",
        img:"",
        name: "Harshita Mangla",
        company: "GJUST",
        address: "Faridabad",
        designation:"Student"
    },
    {
        id:"00004",
        img:"",
        name: "Sumathi",
        company: "Capgemini",
        address: "Guntur",
        designation:"Software Engineer"
    },
    {
        id:"00005",
        img:"",
        name: "Atul Singh",
        company: "Appinventiv Technologies",
        address: "Noida",
        designation:"Software Engineer"
    },
    {
        id:"00006",
        img:"",
        name: "Prajwali",
        company: "Zeta",
        address: "Bengaluru",
        designation:"Senior Software Engineer"
    },
    {
        id:"00007",
        img:"",
        name: "Pranav",
        company: "ITC Infotech",
        address: "Bengaluru",
        designation:"Senior Software Engineer"
    },
    {
        id:"00008",
        img:"",
        name: "Priya",
        company: "Manhattan Associates",
        address: "Bengaluru",
        designation:"Software Engineer"
    },
    {
        id:"00009",
        img:"",
        name: "Samridhi Pandey",
        company: "HPE",
        address: "Noida",
        designation:"Software Engineer"
    },
    {
        id:"00010",
        img:"",
        name: "Utpal Sangwan",
        company: "Ramjas College",
        address: "Vijaynagar",
        designation:"Student"
    }
];

const HeadingComponent=()=>(
<div id="title" className="title-class" tabIndex="1">
    <h2>{title}</h2>
</div>
);


const CardContainer=()=>
{
    const card=data.map((teamMembers)=>{
        return <CardComponent teamMembers={teamMembers} key={teamMembers.id}/>
    })
    return card;
};

const BodyComponent=()=>(
    <div className="card-container">
        <CardContainer></CardContainer>
    </div>
);

const AppLayout =()=>(
    <>
    <HeadingComponent/>
    <BodyComponent/>
    </>
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);