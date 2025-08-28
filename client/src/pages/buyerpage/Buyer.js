// import React, { createContext, useEffect, useState } from 'react'
// import { userContext } from '../../Component/UserContext'
// import { useContext } from 'react'
// import HandleLogout from '../../Component/HandleLogout'
// import BuyerProductStructure from '../../Component/BuyerProductStructure'
// import '../../style/buyer.css'
// import '../../style/pages.css'
// import axios from 'axios'
// import { Link, useNavigate } from 'react-router-dom'
// const Buyer = () => {
//   const navigate=useNavigate();
//   const [userData,setUserData]=useState('');
//   const {user,processedArray}=useContext(userContext);
//   const [search,setSearch]=useState('')
//   const pattern=new RegExp(search,'gi');
// // console.log(processedArray);
//   function handleInput(e){
//     setSearch(e.target.value);
//   }

//   useEffect(()=>{
//     // console.log(user)
// axios.get('/')
//      .then(res=>setUserData(res.data))
//      .catch(err=>console.log(err))
// axios.get('/profile')
//      .then(res=>{
//       // console.log(res.data)
//     if(res.data==='null'){
//       navigate('/login')
//     }
//     })
//      .catch(err=>console.log(err));
//   },[]
//   )
// function handleFeedBack(){
//   navigate('/feedback')
// }

//   return (
//   <div className='buyer'>
//     <div>
//       <h1>Buyer page</h1>
//       {user && (<h2>welcome {user.email}</h2>)}
//       <div className='feedback-button'>
//       <button onClick={handleFeedBack} className='feedback'>Send Feedback</button>
//       {/* <Link to="/favorite" className="nav-link">Favorites</Link> */}
//       <button onClick={() => navigate('/favorite')} className='favorite-btn1'>❤️</button>
//       </div>
//       </div>
//       <div className='buyer-input-div'><div><input placeholder='search' onChange={handleInput}/></div></div>
//       <div className='buyer-products-container'>
//       {userData && userData.map(element=>{
//         if(pattern.test(element.name)||pattern.test(element.size)||pattern.test(element.description)||pattern.test(element.color)||pattern.test(element.brand)||pattern.test(element.category)||pattern.test(element.type)){
//           if(element.status==="on"){
//             if(element.quantity!=0)
//           return <BuyerProductStructure key={element._id} id={element._id} name={element.name} brand={element.brand} price={element.price} size={element.size} description={element.description} photo={element.photo} element={element} />
//         }
//       }
//         })}
//       </div>
//     </div>

//   )
// }

// export default Buyer

import React, { /* createContext, */ useEffect, useState } from 'react'
import { userContext } from '../../Component/UserContext'
import { useContext } from 'react'
// import HandleLogout from '../../Component/HandleLogout';
import BuyerProductStructure from '../../Component/BuyerProductStructure'
import '../../style/buyer.css'
import '../../style/pages.css'
import axios from 'axios'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Buyer = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState('')
  const { user /* , processedArray */ } = useContext(userContext)
  const [search, setSearch] = useState('')
  const pattern = new RegExp(search, 'gi')

  function handleInput(e) {
    setSearch(e.target.value)
  }

  useEffect(() => {
    axios
      .get('/')
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err))
    axios
      .get('/profile')
      .then((res) => {
        if (res.data === 'null') {
          navigate('/login')
        }
      })
      .catch((err) => console.log(err))
  }, [navigate])

  function handleFeedBack() {
    navigate('/feedback')
  }

  return (
    <div className='buyer'>
      <div>
        <h1>Buyer page</h1>
        {user && <h2>welcome {user.email}</h2>}
        <div className='feedback-button'>
          <button onClick={handleFeedBack} className='feedback'>
            Send Feedback
          </button>
          {/* <Link to="/favorite" className="nav-link">Favorites</Link> */}
          <button
            onClick={() => navigate('/favorite')}
            className='favorite-btn1'
          >
            ❤️
          </button>
        </div>
      </div>
      <div className='buyer-input-div'>
        <div>
          <input placeholder='search' onChange={handleInput} />
        </div>
      </div>
      <div className='buyer-products-container'>
        {userData &&
          userData.map((element) => {
            if (
              pattern.test(element.name) ||
              pattern.test(element.size) ||
              pattern.test(element.description) ||
              pattern.test(element.color) ||
              pattern.test(element.brand) ||
              pattern.test(element.category) ||
              pattern.test(element.type)
            ) {
              if (element.status === 'on') {
                if (element.quantity !== 0) {
                  return (
                    <BuyerProductStructure
                      key={element._id}
                      id={element._id}
                      name={element.name}
                      brand={element.brand}
                      price={element.price}
                      size={element.size}
                      description={element.description}
                      photo={element.photo}
                      element={element}
                    />
                  )
                }
              }
            }
            return null // 🔁 ensure map always returns something
          })}
      </div>
    </div>
  )
}

export default Buyer
