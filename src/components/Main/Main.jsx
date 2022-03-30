import React, { useState } from 'react'
import CustomCard from '../UI/CustomCard'
import Data from '../Data'
import CustomSelect from '../UI/CustomSelect'
import NavBar from '../UI/NavBar'
import {Row,Col} from 'react-bootstrap'
function Main() {
    const[title,setTitle]=useState('')
    const[rating,setRating]=useState(0)
console.log(title)
  return (
    <div>
        <NavBar setTitle={setTitle}  />
       
    
        <CustomSelect setRating={setRating}  /> 
        <Row xs={2} md={4} className="g-4">

        {Data?.map((el,key)=>
        
         
        //if (el.title.toLowerCase().includes(title.toLowerCase())){
        //         return         <CustomCard movie={el}  />

        //     }
        // }
        el.title.toLowerCase().includes(title.toLowerCase())
        && 
          el.rating>=rating 
        ?
        <Col>
        <CustomCard movie={el}  />
        </Col>
            :
            ''
        
        
        )}
        </Row>
        
    </div>
  )
}

export default Main