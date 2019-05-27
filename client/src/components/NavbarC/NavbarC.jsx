import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Jumbotron,Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarC.css';



class NavbarC extends Component {

    // les onclick des navItem ici dans les liens ne serviront plus trop a grande chose avec l'utilisation des router
 

  render() {
      return (
    
          <Row classNameName="jumbotron" height="auto"> 

            <Col md={6}  align="left" classNameName="d-inline " > 
                <div classNameName="" height="100"> 
                    <label classNameName=""> 
                        <img classNameName="" src="./images/logo.png" alt="NoImage" width='100' /> 
                    </label> 
                    <p width='20%' height='10'> World Compétition </p> 
                </div> 
            </Col> 

            <Col  md={{ span: 6, offset: 4 }} align="right">
              <form classNameName="d-inline form-inline"> 
                  <input classNameName=" form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search"/> 
                  <button classNameName=" btn btn-outline-success mr-sm-0" id='btnid' type="submit"> chercher </button> 
              </form> 
            </Col>
       </Row> 

      )

    }
  }
  export default NavbarC;

       