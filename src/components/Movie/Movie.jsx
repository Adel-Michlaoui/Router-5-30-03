import { Button } from 'react-bootstrap'
import React from 'react'
import Data from '../Data'
import {useParams, useHistory} from 'react-router-dom'

function Movie( ) {
    const {id}=useParams() 
    const Found= Data.filter(el=> el.id==id) 
    const History= useHistory()
    if(id==0) { 
        History.push("/")
        window.location.reload()
    }  
    if(id> Data.length) {
        History.push("/")
        window.location.reload()
    }  
    console.log(useHistory())
  return (
    <>
    <div>
    {Found[0].title}
    </div>
    <div>
        {Found[0].trailer}
    </div>
        <div>
        {Found[0].description}
    </div>
    <Button variant="success" onClick={()=>History.goBack()} >  Go Back </Button>
    <Button variant="primary" onClick={()=>History.push('/')} >  ACCEUIL </Button>  
        {id<= Data.length-1? 
    <Button variant="warning" onClick={()=>History.push(`/Movie/${Found[0].id+1}`)} >  NEXT </Button>
    :'' }
    {id>1?
    <Button variant="danger" onClick={()=>History.push(`/Movie/${Found[0].id-1}`)} >  PREVIOUS </Button>     
    :'' }
    </>
  )
}

export default Movie