import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function CustomCard({movie}) {
  return (
    <Link to = {`/Movie/${movie.id}`}>
    <div >
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterURL} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <Button variant="primary"> {movie.rating} </Button>
  </Card.Body>

</Card>
    </div>
    </Link>
  )
}

export default CustomCard