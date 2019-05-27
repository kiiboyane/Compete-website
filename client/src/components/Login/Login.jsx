import React, { Component } from 'react'
import {Form,Row,Col,Button,} from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Register from '../Register/Register'


export default class Login extends Component {

    state={
      login:{email : null, 
      password : null},

      signup:{
        prenom : "",
        nom : "",
        email : "",
        password : "",
        tel : "",
        function : "",
        organisation : "",
        naissance : "",
        sex : false ,
      },
      
      checked: false,
    }

    changeEmail = (e) => {
      var proState={...this.state};
      proState.login.email=e.target.value;
      this.setState({
        proState
      }); 
  }
  changePassword = (e) => {
      var proState={...this.state};
      proState.login.password=e.target.value;
      this.setState({
        proState
    }); 
  }

  handleCheched = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  submitLog = (e) => {
      console.log("sommit submit...");
      // e.preventDefault() ; 
      // console.log(this.state.email) ; 
      // console.log(this.state.password) ; 
      // const user = this.state ;
      // console.log(user) ;
      // const instance = axios.create({baseURL: 'http://localhost:3001/api'})
      // instance.post('/logincheck', user )
      // .then(res => {
      //   console.log(res.data[0]);
      //})
  }


  render() {
    const { checked } = this.state;

    return (
      <div className="container flex-row align-items-center" >
        <div className="row" >
            <h1>CONNEXION</h1>
            <hr/>
            <div className="col-sm-3"></div>
            
              <Fade in={!checked} hidden={checked}>
                <Paper elevation={4} className="paper">
                    <Form className="col col-lg-6 col-sm-6">
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        Email
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" onChange = {this.changeEmail} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                      <Form.Label column sm={2}>
                        Password
                      </Form.Label>
                      <Col sm={10}>

                        {/* autoComplete ou value en parametre pour mettre de valeur initiale: autoComplete="current-password" */}
                        <Form.Control type="password" placeholder="Password"  onChange={this.changePassword} />
                      </Col>
                    </Form.Group>
                    <fieldset>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                          Privilege
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Check
                            type="radio"
                            label="User"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                          />
                          <Form.Check
                            type="radio"
                            label="Jury"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                          />
                          <Form.Check
                            type="radio"
                            label="Admin"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                          />
                        </Col>
                      </Form.Group>
                    </fieldset>
                    <Form.Group as={Row} controlId="formHorizontalCheck">
                      <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                      <Col sm={4} style={{margin:"1em"}}>
                        <Button type="submit" onClick={this.submitLog}>Sign in</Button>
                      </Col>
                      <Col sm={4}>
                        <h5> <a href="/forgotpass" >mot de passe oublié??</a></h5>
                       
                      </Col>
                      <Col sm={4}></Col>
                      <Col sm={12} className="">
                          <Button color="link" className="px-0" onClick={this.handleCheched}>CREER UN COMPTE?</Button>
                        </Col>
                    </Form.Group>
                  </Form> 
                </Paper>
              </Fade>

              <Fade in={checked} hidden={!checked}>
                <Paper elevation={4} className="paper">
                  <Register />
                </Paper>
              </Fade>
            
          </div>
      </div>
    )
  }
}
