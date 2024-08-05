import { useState } from "react";
import axios from "axios";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, data = null) => {
    setLoading(true);
    setError(null);

    try {
      let response;
      if (data) {
        response = await axios.post(`http://localhost:3002${endpoint}`, data);
      } else {
        response = await axios.get(`http://localhost:3002${endpoint}`);
      }
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  };

  return { loading, error, fetchData };
};

export default useApi;
