import { Card , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item ({product}) {
  const { price, image } = product
  
return (
  <div id='itemDiv'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/${image}`} />
      <Card.Body>
        <Card.Text> $ {price}</Card.Text>
        <Link to={`/item/${product.id}`}><Button variant="primary">View more</Button></Link>
      </Card.Body>
    </Card>
  </div>
)
}

export default Item;
