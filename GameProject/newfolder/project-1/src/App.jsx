import React from 'react'
import Navbar from './components/navbar'
import Section1 from './components/Section1'
import { Route,Routes } from 'react-router-dom'
import { Home } from './components/Home'


const comp=[{
  img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqBCl92-9ug8ad3PHtsqtNUKg7qhSw-zZBAyfDhu2rQ&s=10',
  name : 'google',
  work : 'Software Engineer',
    rate: '60',
},{
  img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqkDouQLGCxyCOXysCg1dh-uFqbGBnpknoWONb2qxOw&s',
  name : 'facebook',
  work : 'Product Manager',
    rate: '40',
},{
  img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNX0OMZ8rhQat08axUpvvSs2vBOTLXDJCKrkBAMaolg&s=10',
  name : 'instagram',
  work : 'Data Scientist',
    rate: '70',
},{
  img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZh2PnXjtkhcwCklxUUvYt8uWAlPB--2xPcaYsxqoz9g&s=10',
  name : 'X-twitter',
  work : 'Marketing Specialist',
    rate: '30',
},{
   img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRKz-wZOmQ2bzEusZ8Mhv7ZciiZsdI88WKmTh1IPWEw&s=10',
  name : 'Whatsapp',
  work : 'Cloud Manager',
    rate: '80',
},{
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjiXLCE_MPs34Hdzg47X9rkr_BfZTwwMzQ1LtMl0-EeQ&s=10',
  name : 'img acedamy',
  work : 'web developer',
  rate : '90',
},
]
const App = () => {
  return (
    <div className='main h-full w-full '>
        <Navbar />
        <Routes>
          <Route path='/' element={<Section1 company={comp} />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        
    </div>
  )
}

export default App
