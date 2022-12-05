import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home(props) {
  const navigate = useNavigate();
  const [json, setJson] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/getAll", {
        headers: { auth: `${JSON.parse(localStorage.getItem("auth"))}` },
      })
      .then((res) => {
        console.log(res); // Here we get the token in data
        setJson(res.data);
      })
      .catch((err) => {
        // toast.error(err.response.data);
      });
  }, []);
  return (
    <div>
      <p>{JSON.stringify(json)}</p>
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
