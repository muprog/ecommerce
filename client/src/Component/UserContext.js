import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const userContext = createContext({})
export function UserContextProvider({ children }) {
  const [user, setUser] = useState('')
  const [cartData, setCartData] = useState([])
  const [count, setCount] = useState()
  const [searchController, setSearchController] = useState()
  const [buyerBuysProduct, setBuyerBuysProduct] = useState([])
  const [preUserBalance, setPreUserBalance] = useState([])
  const [userBalance, setUserBalance] = useState([])
  const [allUser, setAllUser] = useState([])
  const [status, setStatus] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [some, setSome] = useState([])
  const [processedArray, setProcessedArray] = useState([])
  const [uniqueArray, setUniqueArray] = useState([])
  useEffect(() => {
    // Only fetch profile once when component mounts
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('/profile')
        if (data && data.email) {
          setUser(data)
        }
      } catch (err) {
        console.log('Profile fetch error:', err)
        // Don't set user to empty string on error, just log it
      }
    }
    
    fetchProfile()
  }, []) // Empty dependency array - only run once
  useEffect(() => {
    if (user && user.email) {
      const storedCartData = localStorage.getItem(`cartData_${user.email}`)
      if (storedCartData) {
        setCartData(JSON.parse(storedCartData))
      }
    }
  }, [user, setCartData])

  // Save cartData to localStorage whenever it changes
  useEffect(() => {
    if (user && user.email) {
      if (cartData.length > 0) {
        localStorage.setItem(`cartData_${user.email}`, JSON.stringify(cartData))
      } else {
        localStorage.removeItem(`cartData_${user.email}`)
      }
    }
  }, [user, cartData])
  // console.log(user);
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        cartData,
        setCartData,
        count,
        setCount,
        searchController,
        setSearchController,
        buyerBuysProduct,
        setBuyerBuysProduct,
        userBalance,
        setUserBalance,
        preUserBalance,
        setPreUserBalance,
        allUser,
        setAllUser,
        status,
        setStatus,
        filteredData,
        setFilteredData,
        some,
        setSome,
        processedArray,
        setProcessedArray,
        uniqueArray,
        setUniqueArray,
      }}
    >
      {children}
    </userContext.Provider>
  )
}
