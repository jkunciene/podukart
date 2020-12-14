import React from 'react';
import {Card,Col, Row} from 'react-bootstrap';

export default function Films(props){
console.log(props)

        return(
            <Row className="justify-content-center">
                {props.films.Search.map((film, index)=>(
                    <Col md={4} className="mb-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={film.Poster}/>
                            <Card.Body>
                            <Card.Title key={index}>{film.Title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    )
                )}
            </Row>
        )

}

