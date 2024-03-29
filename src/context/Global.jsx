import React, {createContext, useState, useEffect, useContext} from 'react'
import axios from 'axios'

export const GlobalStateContext = createContext()

export const GlobalProvider = ({children}) => {
    const [allBreweries, setAllBreweries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allBreweriesFiltered, setAllBreweriesFiltered] = useState ([]);
    const [error, setError] = useState (null);
    const [currentPage, setCurrentPage] = useState(1);
    const [favorites, setFavorites] = useState([]);
  
    
    useEffect(() => {

      const getAllBreweries = async () => {
        try {
          const response = await axios.get('http://api.openbrewerydb.org/v1/breweries?per_page=200');
          setAllBreweries(response.data);
        }
        catch(err){
          setError(err)
        }
      }
      
      getAllBreweries()
      
    },[])
    
    
  
      return (
        <GlobalStateContext.Provider
        value={{
          allBreweries,
          setAllBreweries,
          allBreweriesFiltered,
          setAllBreweriesFiltered,
          loading,
          setLoading,
          error,
          setError,
          currentPage,
          setCurrentPage,
          favorites,
          setFavorites
        }}
        >

    {children}

    </GlobalStateContext.Provider>
  )


}
export default GlobalProvider