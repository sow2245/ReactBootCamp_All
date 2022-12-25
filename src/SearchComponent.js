import { useState } from "react";
import data from "./data.json";

const searchTeamData=(searchText)=>{
    const searchTextToLowerCase=searchText.toLowerCase();
    return data.filter((team)=>
       (team.name.toLowerCase().includes(searchTextToLowerCase)
           || team.address.toLowerCase().includes(searchTextToLowerCase)
               || team.company.toLowerCase().includes(searchTextToLowerCase)
                   || team.designation.toLowerCase().includes(searchTextToLowerCase))
    );
};

const SearchComponent =({setFilteredData})=>{
    const [searchText,setSearchText] = useState();

    return(
    <div className="search">
            <form 
            onSubmit={
                (e)=>{
                    e.preventDefault();
                    const filteredData = searchTeamData(searchText);
                    setFilteredData(filteredData);
                }
            }>
                <input id="searchBox" placeholder="search" 
                       value={searchText}
                       onChange={
                        (e)=>{setSearchText(e.target.value);}
                       }></input>
                <button>Search</button>
            </form>
    </div>
    );
};

export default SearchComponent;