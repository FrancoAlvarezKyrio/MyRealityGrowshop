import React from 'react';
import { Button , Card , Col , Container , Row } from 'react-bootstrap';

const CartItem = ({ product , removeItem}) => {
  return (
    <Card id='cartItem'>
        <Container>
            <Row id='row'>
                <Col><img src={product.item.image}/></Col>
                <Col>{product.item.title}</Col>
                <Col>{product.count} Units</Col>
                <Col>$  {product.item.price}</Col>
                <Col><Button variant='danger' onClick={()=>removeItem(product.item.id)}>Remove</Button></Col>
            </Row>
        </Container>
    </Card>
  )
};

export default CartItem;
