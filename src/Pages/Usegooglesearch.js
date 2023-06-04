// import React, { useEffect, useState } from "react";

// const CONTEXT_KEY = "cx=609b2053e25c4463a";
// const API_KEY = "AIzaSyBp_OqeARVddTlrCeaPeKjccjxvggVEh2A";

// const Usegooglesearch = (term) => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
//         );
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [term]);

//   return { data };
// };

// export default Usegooglesearch;

// end 

// import React, { useEffect, useState } from "react";

// const CONTEXT_KEY = "cx=609b2053e25c4463a";
// const API_KEY = "AIzaSyBp_OqeARVddTlrCeaPeKjccjxvggVEh2A";
// const Usegooglesearch = (term) => {
//   const [data, setdata] = useState({});
//   useEffect(() => {
//     const fetchdata = async () => {
      
//       fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
      
//         .then((res) => res.json())
//         .then((result) => {
//           setdata(result);
//         });
//     };
//     fetchdata();
//   }, [term]);
//   return { data };
// };

// export default Usegooglesearch;


// end

import React, { useEffect, useState } from "react";

// const API_KEY = "AIzaSyBp_OqeARVddTlrCeaPeKjccjxvggVEh2A";

const API_KEY = " AIzaSyAYTOPsehT2OqD8JM4k5kRLRUNk-Bqoy4U";
const CONTEXT_KEY = "609b2053e25c4463a";

const Usegooglesearch = (term) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [term]);

  return { data };
};

export default Usegooglesearch;

// import Key, { API_KEY } from "../Pages/Key";
//   return (
//     <div>Usegooglesearch</div>
//   )
//     https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
//GET https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures
// `https://developers.google.com/custom-search/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
