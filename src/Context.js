import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?apikey=caa024a9&s=titanic`;


const AppProvider = ({ children }) => {

            const [isLoading, setIsLoading] = useState(true);
            const [isError, setIsError] = useState({ show: "false", msg: "" });
            const [movie, setMovie] = useState([]);
  
  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

            if (data.Response === "True") {
              setIsLoading(false);
              setMovie(data.Search || data);
              setIsError({ show: "false", msg: "" });
            } else {
              setIsError({ show: "true", msg: data.Error });
            }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      getMovie(API_URL);
  }, []);

  return (
    <>
      <AppContext.Provider value = {{isLoading, isError, movie}}>
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider,useGlobalContext};