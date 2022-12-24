import React from "react";
import ReactDom from "react-dom/client";
import logo from "./Img/logo.jpg"
import userIcon from "./Img/userIcon.jpg"

//Start of Left Column
//Nesting Elements in React
const nestingEleInReactHeading = React.createElement("div",{id:"title"},[
    React.createElement("h1",{},"Namaste React BootCamp"),
    React.createElement("h2",{},"from zero to hero"),
    React.createElement("h3",{},"in 3 months")]);

const nestingEleInReactRoot = ReactDom.createRoot(document.getElementById("rootReact"));

nestingEleInReactRoot.render(nestingEleInReactHeading);

//Same in JSX
const nestingEleInJSXHeading = (<div>
    <h1>Namaste React BootCamp JSX</h1>
    <h2>from zero to hero JSX</h2>
    <h3>in 3 months JSX</h3>
</div>);

const nestingEleInJSXRoot = ReactDom.createRoot(document.getElementById("rootJSX"));

nestingEleInJSXRoot.render(nestingEleInJSXHeading);

//Passing attributes
const passingAttrHeading = (<div>
    <h1 id="passAttrId">Passing Attribute ID</h1>
    <h2 className="passAttr-Class">Passing Attributes Class</h2>
    <h2 tabIndex="1">Passing Attributes Tab Index</h2>
</div>);

const passingAttrRoot = ReactDom.createRoot(document.getElementById("rootPassAttr"));

passingAttrRoot.render(passingAttrHeading);

//Composition of components

//TitleComponent is called as functional component    
const TitleComponent = () =>
{
    return <h1>Namaste React BootCamp Composition of component</h1>
};
//The above TitleComponent can also be written like this:Because it is single element
//const TitleComponent = () =>  <h1>Namaste React BootCamp</h1>;


const compositionCompHeading = (<div>
    <TitleComponent/>
    <h2>from zero to hero</h2>
    <h3>in 3 months</h3>
</div>);

const compositionCompRoot = ReactDom.createRoot(document.getElementById("rootCompositionComp"));

compositionCompRoot.render(compositionCompHeading);

//Using Functional Component
const year = 2022;
const FunCompHeading = ()=>{
    return(<div>
                <h1>Using Functional Component</h1>
                <h2>Experssion , Inserting some variable And With JS Code</h2>
                <h3>2 * 2 = {2*2}</h3>
                <h4>Learning Reat in {year}</h4>
                <h5>{console.log("Test")}</h5>
            </div>)};

const funCompRoot = ReactDom.createRoot(document.getElementById("rootFunComp"));

funCompRoot.render(<FunCompHeading/>);
//End of Left Column

//Start of Right Column

//Logo,Search Bar in Between,User Icon
const LogoSearchUserIconHeading = ()=>{
    return(
    <div >
        <img id="logoId" src={logo} alt="logo"></img>
        <input id="searchBarId" value="Search Here"></input>
        <button id="loginButtonId" type="Login">
            <img id="userIconId" src={userIcon} alt="UserIcon"/>
        </button>
    </div>
)};

const logoSearchUserIconRoot = ReactDom.createRoot(document.getElementById("rootLogoSearchUserIcon"));

logoSearchUserIconRoot.render(<LogoSearchUserIconHeading/>);
//End of Right Column


//To remove React before createElement
/*import {createElement} from "react"; 
import ReactDom from "react-dom/client";

//In the above way import can help us to remove react from the below code
const nestingEleInReactHeading = createElement("div",{id:"title"},[
    createElement("h1",{},"Namaste React BootCamp Removed React"),
    createElement("h2",{},"from zero to hero"),
    createElement("h3",{},"in 3 months")]);

const nestingEleInReactRoot = ReactDom.createRoot(document.getElementById("rootReact"));

nestingEleInReactRoot.render(nestingEleInReactHeading);
*/