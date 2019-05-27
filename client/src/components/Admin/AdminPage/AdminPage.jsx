import React, { Component } from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import AdminContestList from '../AdminContest/AdminContestList'
import ListUsers from '../AdminUser/ListUsers'
import SoumissionAdmin from '../SoumissionAdmin/SoumissionAdmin'


export default class AdminPage extends Component {
  state={
    btnC:false,
    btnU:false,
    btnS:false
  }
  onAdminContest= () => {
    this.setState(state => ({ btnC: !this.state.btnC,btnU:false,btnS:false}));
  };
  onAdminUser= () => {
    this.setState(state => ({ btnU: !this.state.btnU,btnC:false,btnS:false}));
  };
  onAdminSoumission= () => {
    this.setState(state => ({ btnS: !this.state.btnS,btnU:false,btnC:false}));
  };
  render() {
    return (
      <Container>
        <h3>PAGE DE L'ADMINISTRATAIRE</h3>
        <hr/>
        <Row>
          <Col sm={2} ><Button onClick={this.onAdminContest} slyle={{color:"green"}}>Liste des compétitions</Button></Col>
          <Col sm={2} slyle={{margin:"1em"}}><Button onClick={this.onAdminUser} slyle={{color:"green"}}>Liste des Users</Button></Col>
          <Col sm={2} ><Button onClick={this.onAdminSoumission}>Liste des Soumis</Button></Col>
          <Col sm={6}></Col>
        </Row>
        <Row>
          <div hidden={!this.state.btnC}><AdminContestList/></div>
          <div hidden={!this.state.btnU}><ListUsers/></div>
          <div hidden={!this.state.btnS}><SoumissionAdmin/></div>
        </Row>
      </Container>
    )
  }
}
