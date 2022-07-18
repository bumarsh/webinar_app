import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import parse from "html-react-parser";

export default function MainContainer({ inputData }) {
  const [data, setData] = useState({});
  const [notFound, setNotFound] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const fetchData = () => {
    setLoading(true);
    setNotFound(false);
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${inputData}`)
      .then((r) => {
        setData(r.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((e) => {
        setLoading(false);

        setNotFound(true);
        console.log(e.response.status);
      });
    console.log(inputData);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (notFound) {
    return (
      <Box component="main" sx={{ p: 3 }}>
        <Button variant="contained" onClick={fetchData} color="success">
          Search
        </Button>
        <h1>Data Not found</h1>
      </Box>
    );
  }

  return (
    <div>
      <Box component="main" sx={{ p: 3 }}>
        <Button variant="contained" onClick={fetchData} color="success">
          Search
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1> Name: {data.name}</h1>
            <h1> Price: {data.market_data?.current_price.php}</h1>
            <p>Description: {parse(data.description?.en)}</p>
          </div>
          <div>
            <h1>
              {" "}
              Image: <img src={data.image?.large} alt="Coin Image" />
            </h1>
          </div>
        </div>
      </Box>
    </div>
  );
}
