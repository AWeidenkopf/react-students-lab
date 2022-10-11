import { Card } from "react-bootstrap"
import Score from "./Score"

const Students = ({student}) => {

  return ( 
    <Card style={{ width: '18rem', height: '40rem' }}>
      <Card.Body>
      <Card.Title>{student.name}</Card.Title>
      <Card.Text>{student.bio}</Card.Text>
      <div className="score-div">
      {student.scores.map(score => <Card.Text><Score key={score.date} score={score}/></Card.Text>)}
      </div>
      </Card.Body>
    </Card>
  )
}

export default Students