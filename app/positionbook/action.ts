import axios from "axios";

export const PositionBookDataFetch = async () => {
  const res = await axios.get("");
  return res.data;
};