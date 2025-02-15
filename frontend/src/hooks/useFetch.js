import { useState, useEffect } from "react";

const useFetch = () => {
  const signIn = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign in");
      }

      const result = await response.json();
      console.log("Sign-in Response:", result);
      return result;
    } catch (error) {
      console.error("Sign-in Error:", error.message);
      return { error: error.message };
    }
  };

  const signUp = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign up");
      }

      const result = await response.json();
      console.log("Sign-up Response:", result);
      return result;
    } catch (error) {
      console.error("Sign-up Error:", error.message);
      return { error: error.message };
    }
  };

  const fetchNotes = async (url) => {
    try {
      const token = JSON.parse(localStorage.getItem("jwtToken"));

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch notes");
      }

      return await response.json();
    } catch (error) {
      console.error("Fetch Notes Error:", error.message);
      return { error: error.message };
    }
  };

  return { signIn, signUp, fetchNotes };
};

export default useFetch;

export const useCustomFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
};
