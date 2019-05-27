import React, { Component } from 'react';
import { Jumbotron,Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      liste:[{
        id:0,
          img:"images/comptition.jpg",
          titre:"java compete",
          samary:"That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out."
        },
        {
          id:1,
          img:"images/comptition.jpg",
          titre:"android compete",
          samary:"That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out."
        },
        {
          id:2,
          img:"images/comptition.jpg",
          titre:"compilation compete",
          samary:"That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out."
        }
      ]
    }
  }

  // chargerHome(){
  //   this.setState({
  //     liste:API.troisDernier();
  // });
  // }

  

  render() {

    const contestWrapper=this.state.liste.map((contest)=>{
       return(
        <Col xs={12} sm={4} className="person-wrapper" key={contest.id}>
            <Image src={contest.img} circle className="profile-pic"/>
            <h3>{contest.titre}</h3>
            <p>
              {contest.samary} 
              < Button Rounded variant="info">voir</Button>
            </p>
            
          </Col>
        ) 
    });


    return (
      <Container align="center"  className="">
        <Jumbotron>
          <h2>Bienvenue sur WORLD-Competition</h2>
          <p>Ceci est une plateforme Réalisé à l'ENSIAS pour la gestions des compétions</p>
          <Link to="/about">
            <Button bsStyle="primary">Savoir plus..</Button>
          </Link>
        </Jumbotron>
{/*         pour charger la liste au demarage
        onLoad={this.chargerHome} */}
        <Row  className="show-Container text-center" >  
          {contestWrapper}
        </Row>
      </Container>
    )
  }
}

