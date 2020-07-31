import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

import "./home.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/screams")
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Grid container justify="center" spacing={4}>
      <Grid className="main_wrap" item sm={8} xs={12}>
        <h2>This is main</h2>
      </Grid>
      <Grid className="sidebar_wrap" item sm={4} xs={12}>
        <ul>
          {data.map((item) => (
            <li key={item.screamId}>
                 {item.screamId} 
                 <img src={item.userImage} alt=""/>
                 </li>
             
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};
export default Home;
