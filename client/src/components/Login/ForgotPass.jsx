import React, { Component } from 'react'
import {Form,Row,Col,Button,} from 'react-bootstrap'
import Paper from '@material-ui/core/Paper';


export default class InfoUser extends Component {

    state={
        codesend:false,
        email:null,
        code4:null,
        codePlaceholder:"7777"
    }
    sendMail = (e) => {
        if(e.target.value!==null){
            this.setState({
                codesend:true,
            }); 
        } 
        
    }
    sendCode = (e) => {
        if(e.target.value!==null){
           if(!(e.target.value.localeCompare("7777"))){
               document.location.href = "/";
            } 
            else{
                this.setState({
                    code4:"",
                    codePlaceholder:"incorrect",
                 }); 
            }
        }
        
    }
    changeEmail = (e) => {
        this.setState({
           email:e.target.value,
        }); 
    }
          
    changeCode = (e) => {
        this.setState({
           code4:e.target.value,
        }); 
    }

  render() {
    return (
        <div className="container flex-row align-items-center" >
        <div className="row" >
            <h3>mot de pass oublié</h3>
            <hr/>
            <div className="col-sm-3"></div>
            
                <Paper elevation={4} className="paper">
                    <Form className="col col-lg-6 col-sm-6" hidden={this.state.codesend}>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        Email
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="email" value={this.state.email} placeholder="Email" onChange = {this.changeEmail} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Col sm={4} style={{margin:"1em"}}>
                        <Button onClick={this.sendMail}>envoyer code</Button>
                      </Col>
                      </Form.Group>
                    </Form> 

                    <Form className="col col-lg-6 col-sm-6"  hidden={!this.state.codesend}>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>
                        entrez le code réçu
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" value={this.state.code4} placeholder={this.state.codePlaceholder} onChange = {this.changeCode} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Col sm={4} style={{margin:"1em"}}>
                        <Button onClick={this.sendCode}>valider</Button>
                      </Col>
                      </Form.Group>
                    </Form> 
                </Paper>
          </div>
        </div>
    )
  }
}
