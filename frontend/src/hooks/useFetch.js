import { useState, useEffect } from "react";

const useFetch = () => {
  const signIn = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to sign in");
    }
    console.log("The signIn response is",response);
    return response.json();
  };
  const signUp = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to sign up");
    }
    console.log(response);
    return response.json();
  };
  const fetchNotes = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    });
    if(!response.ok) {
      throw new Error("Failed to fetch notes");
    }
    
    return response.json();
  };
  return { signIn, signUp, fetchNotes };
};

export default useFetch;

export const useCustomFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
