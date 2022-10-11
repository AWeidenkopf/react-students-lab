import ListGroup from "react-bootstrap/ListGroup";

const Score = ({score}) => {
  return ( 
    <ListGroup horizontal>
      <ListGroup.Item>Date: {score.date}</ListGroup.Item>
      <ListGroup.Item>Score: {score.score}</ListGroup.Item>
    </ListGroup>
  )
}

export default Score;