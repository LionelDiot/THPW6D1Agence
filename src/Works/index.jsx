import React, { useState } from "react";
import { Link } from "react-router-dom";
import Showdown from "showdown";
import { Button, Card, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const converter = new Showdown.Converter();


export default function Works()  {
  const note = `### Au fil des années, nous avons pu accompagner les meilleurs.

  Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.`;
  const html = converter.makeHtml(note);
  const studies = [
    { name: 'Platon', slug: 'platon'},
    { name: 'Solane', slug: 'solane'},
    { name: 'Sedal', slug: 'sedal' }
  ];
  const [displayAsCards, setDisplayAsCards] = useState(true);

  const toggleDisplayAsCards = () => {
    setDisplayAsCards(!displayAsCards);
  };

  return (
    <div>
      <h1>Welcome Work :</h1>
      <p dangerouslySetInnerHTML={{ __html: html }} />
      <h2>Please select a work !</h2>
      <Button onClick={toggleDisplayAsCards}>{displayAsCards ? 'Show as a list' : 'Show as cards'}</Button>
      <div className="container">
        {displayAsCards ? (
          <div className="row">
            {studies.map((study) => (
              <div key={study.slug} className="col-12 col-md-4 mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{study.name}</Card.Title>
                    <Link to={`/works/${study.slug}`}>
                      Voir l'étude de cas
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <ListGroup >
            {studies.map((study) => (
              <ListGroup.Item key={study.slug} className="m-3">
                <h2>{study.name}</h2>
                <Link to={`/works/${study.slug}`}>Voir l'étude de cas</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    </div>
  )
}