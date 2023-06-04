import React, { useState } from "react";
import "../CSS/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actiontypes } from "./Reducer";

const Search = ({hidebutton = false}) => {
  const [{},dispatch] = useStateValue();

  const [input, setinput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    // alert("jjjjjjjjjj");
    // console.log("hiii", input);
    dispatch({
      type:actiontypes.SET_SEARCH_TERM,
      term:input
    })
    navigate("/Searchpage");
  };
  return (
    <>
      <form className="search">
        <div className="search-input">
          <SearchIcon className="search_inputicon" />
          <input value={input} onChange={(e) => setinput(e.target.value)} />
          <MicIcon />
          {/* <h1>Search .......</h1> */}
        </div>

        {
            !hidebutton ? (
                <div className="search_button">
                <Button type="submit" variant="outlined" onClick={search}>
                  Google search
                </Button>
                <Button variant="outlined">I'am feeling Lucky</Button>
              </div>
            ):(

                <div className="search_buttonhidden">
                <Button type="submit" variant="outlined" onClick={search}>
                  Google search
                </Button>
                <Button variant="outlined">I'am feeling Lucky</Button>
              </div>
            )}
        
      
      </form>
    </>
  );
};

export default Search;
