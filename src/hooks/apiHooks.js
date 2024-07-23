import axios from "axios";
import { useEffect, useState } from "react";

export const useApiHooks = ({ api, query, id }) => {
  const [data, setData] = useState();


  const getData = async () => {


    try {

      const response = await axios.get(api, {
        params: {
          c: query,
          i: id
        }
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }



  }
  useEffect(() => {

    getData();
  }, []);

  return [data]

}