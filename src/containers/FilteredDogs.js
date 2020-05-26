import React from "react";
import dogs from "../dogsdata";
import {
    Card,
    Container,
    Alert,
    ListGroup, 
    ListGroupItem 
  } from "reactstrap";
const FilteredDogs = (props) => {
  const secilenTur = props.match.params.yazilanTur;
  const filteredDogs = dogs.filter((dog) => dog.breedSlug === secilenTur);
  return (
    <div>
      <Alert color="success">
                      <h1 style={{textAlign: 'center'}}>  Seçilen Tür : {secilenTur} </h1>
                    </Alert>
      <ul>
        <ul>
          {filteredDogs.map((dog) => {
             return (
          <div>
            <Container>
              <Card style={{ height: "600px", textAlign: "center" }}>
                <ListGroup>
                  <ListGroupItem tag="button" action>
                      <h1>  Tür : {dog.name} </h1>
                    <br />
                    <img width="50%" src={dog.image} alt="Card image cap" />

                    <h6>
                      {dog.description}
                      -
                      <br />
                      {dog.age}
                      <br />
                      {dog.published_at}
                      <br />
                      {dog.breed}
                      <br />
                      {dog.id}
                      <br />
                      {dog.name}
                    </h6>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Container>
          </div>
        );
          })}
        </ul>
      </ul>
    </div>
  );
};

export default FilteredDogs;
