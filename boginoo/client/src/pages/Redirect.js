import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Redirect = () => {
  const { redirect } = useParams();
  console.log(redirect);
  useEffect(() => {
    const getUrl = async () => {
      try {
        const data = await axios.get(
          `http://localhost:9000/link/getUrl/${redirect}`
        );
        window.location.href = data.data.data.orignalLink;
      } catch (e) {
        console.log(e);
      }
    };
    getUrl();
  }, []);
  return <div>Loading...</div>;
};
