import { REACT_SERVER_URL } from "../Config/ENV";
import axios from "axios";

export const loginUser = async ({ value }) => {
  const config = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  const { data } = await axios.post(
    `${REACT_SERVER_URL}/users/login`,
    {
      value,
    },
    config
  );

  return data;
};

export const registerUser = async ({ value }) => {
  const config = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  const { data } = await axios.post(
    `${REACT_SERVER_URL}/users/register`,
    {
      value,
    },
    config
  );

  return data;
};
