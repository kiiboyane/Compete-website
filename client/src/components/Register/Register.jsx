import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// import { runInThisContext } from 'vm';

class Register extends Component {
  constructor(props){
    super(props);
      this.state = {
        prenom : "",
        nom : "",
        email : "",
        password : "",
        tel : "",
        function : "",
        organisation : "",
        naissance : "",
        sex : false ,
        "addEmailClass" : false , 
        "addfnClass" : false , 
        "addpassClass" : false , 
        "addlnClass" : false
      }
  }

  validateEmail(email) {
    var re =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  }
  validatePass(password){
    if (password.length < 8){
      return false ; 
    }
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumbers = /\d/.test(password);
    var hasNonalphas = /\W/.test(password);
    if (hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas < 3){
        return false; 
    }
    return true  ; 
  }
  changeFirstName = (e) => {
    this.setState({
         nom : e.target.value , 
         "addlnClass" : false 
    });
  }
  changeLastName = (e) => {
    this.setState({
         prenom : e.target.value ,
         "addfnClass" : false
    });
  }
  changesex = (e) => {
    if(e.target.value === "female")
            this.setState({
                  sex :true  
            });
    else {
      this.setState({
        sex :true  
      });
    }
  }
  changePassword = (e) => {
         this.setState({
          password : e.target.value ,
          "addpassClass" : false
         });
  }
  changeEmail = (e) => {
    var f = this.validateEmail(e.target.value); 
    if(f){
      this.setState({
        email : e.target.value ,
        "addEmailClass" : false 
     });
    }else{
       this.setState({
        "addEmailClass" : true 
       });
    }
  }
  changeBdate = (e) => {
    this.setState({
         naissance : e.target.value 
    });
  }
  changeTelephone = (e) => {
    this.setState({
         tel : e.target.value 
    });
  }
  changeOrganisation = (e) => {
    this.setState({
         organisation : e.target.value 
    });
  }
  changeFunction = (e) => {
    this.setState({
         function : e.target.value 
    });
  }


 /* toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }*/
isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
 submit =(e)=>{
      e.preventDefault();
      const user = this.state ;
      console.log(user); 
      var f = true ; 
      if(this.isEmptyOrSpaces(user.email)) {
        this.setState({
          "addEmailClass" : true 
        });
        f=false ; 
      }
      if(this.isEmptyOrSpaces(user.prenom)) {
        this.setState({
          "addfnClass" : true 
        });
        f=false ; 
      }
      if(this.isEmptyOrSpaces(user.nom)) {
        this.setState({
          "addlnClass" : true 
        });
        f=false ; 
      }
      if(this.isEmptyOrSpaces(user.password)) {
        this.setState({
          "addpassClass" : true 
        });
        f=false ; 
      }
      if(!this.validatePass(user.password)){
         this.setState({
          "addpassClass" : true 
        });
        f=false ; 
        alert("the password should be 8 characters long and contain uppercase letter , lowercase letter , number and  Non-alpha numeric character !")
      }
      if(f){
        const instance = axios.create({baseURL: 'http://localhost:3001/api'})
        instance.post('/adduser', user )
        .then(res => {
          console.log(res.data);
        });
      }
   /*   const instance = axios.create({baseURL: 'http://localhost:3001/api'})
      instance.post('/adduser', user )
      .then(res => {
        console.log(res.data);
      })*/
 }
 Annuler=()=>{
   document.location.href="/login"
 }
  render() {
    // let requiredClass = "form-control-warning"; 
    let EmailClass = ["Light Blue Color"];
    let LnClass = ["lolo"];
    let FnClass = ["lolo"];
    let PassClass = ["lolo"];
    if(this.state.addEmailClass) {
      EmailClass.push(' is-invalid  ');
    } 
    if(this.state.addfnClass) {
      FnClass.push(' is-invalid  ');
    }
    if(this.state.addlnClass) {
      LnClass.push(' is-invalid  ');
    }
    if(this.state.addpassClass) {
      PassClass.push(' is-invalid  ');
    }
    return (
      <div className="animated fadeIn" style={{marginBottom:"6em"}}>
        <Row>
          <Col xs="8" md="8">
            <Card>
              <CardHeader>
                Register to <strong>Compete</strong> 
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.submit} method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="firstname">First name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="firstname" name="firstname" required   className={FnClass.join(" ")} placeholder="First name here ..."  onChange = {this.changeFirstName}/>
                      <FormText color="muted">required *</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="lastname">Last name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="lastname" name="lastname" required   className={LnClass.join(" ")} placeholder="Last name here ..."  onChange = {this.changeLastName} />
                      <FormText color="muted">required *</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Email </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email-input" name="email-input" required   className={EmailClass.join(" ")} placeholder="Enter Email here ..." autoComplete="email" onChange = {this.changeEmail}/>
                      <FormText className="help-block">required *</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password-input" name="password-input"required   className={PassClass.join(" ")}  placeholder="Password" autoComplete="new-password"  onChange = {this.changePassword}/>
                      <FormText className="help-block">Please enter a complex password | required *</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="telephone">Telephone </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="tel" id="telephone" name="telephone" placeholder="Enter telephone here ..."  onChange = {this.changeTelephone}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Birth date  </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date"   onChange = {this.changeBdate}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="sex">Sex</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="sex" id="sex"  onChange = {this.changesex}>
                        <option value="0">Please select</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="function">Function</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="function" id="function"  onChange = {this.changeFunction}>
                        <option value="0">Please select</option>
                        <option value="1">Engineering Student</option>
                        <option value="2">Teacher</option>
                        <option value="3">Engineer</option>
                        <option value="4">Master degree student </option>
                        <option value="5">Other </option>
                      </Input>
                    </Col>
                  </FormGroup>
                
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="organisation">Organisation </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="organisation" name="organisation" placeholder="Enter Organisation here ..." autoComplete="organisation"  onChange = {this.changeOrganisation}/>
                      <FormText className="help-block">the school or the place you work in </FormText>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>

              <CardFooter className="row" >
                <Col sm={3}></Col>
                <Button style={{margin:"2em"}} size="sm" color="primary" onClick = {this.Annuler}><ChevronLeftIcon /> Annuler</Button>
                <Button style={{margin:"2em"}} type="submit" size="sm" color="primary" onClick = {this.submit}><i class="material-icons">done_all</i> <h6>VALIDER</h6></Button>


              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Register;
