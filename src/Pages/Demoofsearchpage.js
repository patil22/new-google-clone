import React from "react";
import "../CSS/Searchpage.css";
import { useStateValue } from "./StateProvider";
import Usegooglesearch from "./Usegooglesearch";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalofferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import { Link } from "react-router-dom";

const Searchpage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = Usegooglesearch(term);

  return (
    <>
      <div className="searchpage">
        <div className="searchpage_header">
          <img
            id="search_headerlogo"
            src={require("../Images/Google-logo.png")}
            alt="Google Logo"
          />
        </div>
        <div className="searchpage_headerbody">
          <Search hidebutton />
          <br />
          <br />

          <div className="searchpage_options">
            <div className="searchpage_optionleft">
              <div className="searchpage_option">
                <SearchIcon /> &nbsp; <Link to="/all">ALL </Link>
              </div>
              <div className="searchpage_option">
                <DescriptionIcon /> &nbsp; <Link to="/all">News </Link>
              </div>
              <div className="searchpage_option">
                <ImageIcon /> &nbsp; <Link to="/all">Images </Link>
              </div>
              <div className="searchpage_option">
                <LocalofferIcon /> &nbsp; <Link to="/all">Shopping </Link>
              </div>
              <div className="searchpage_option">
                <RoomIcon /> &nbsp; <Link to="/all">Maps </Link>
              </div>
              <div className="searchpage_option">
                <MoreVertIcon /> &nbsp; <Link to="/all">More </Link>
              </div>
            </div>

            <div className="searchpage_optionrigth">
              <div className="searchpage_option">
                <SettingsRoundedIcon />
                &nbsp; <Link to="/all">Setting </Link>
              </div>
              <div className="searchpage_option">
                &nbsp; <Link to="/all">Tools </Link>
              </div>
            </div>
            <hr />
          </div>
        </div>
        {data && (
          <div className="searchpage_results">
            <p className="searchpage_resultcount">   
              About {data?.searchInformation?.formattedTotalResults} results (
              {data?.searchInformation?.formattedSearchTime} seconds) for {term}
            </p>
            {data?.items?.map((item) => (
              <div className="searchpage_result">
                <a href="{item.link}">{item.displayLink}</a>
                <h2 id="searchpage_resulttitle">
                  {" "}
                  < a href = "{item.title}"> {item.title} </a>{" "}
                </h2>
                <p className="searchpage_result_snippet">{item.snippet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Searchpage;
