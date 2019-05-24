import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarC.css';



class NavbarC extends Component {

    // les onclick des navItem ici dans les liens ne serviront plus trop a grande chose avec l'utilisation des router
 

  render() {
    return (

      <div>
        <div className="navbar navbar-light navhauter bg-light" > 

            <div className="d-inline jumbotron"> 
                <div className="container text-center"> 
                    <label className="navbar-brand"> 
                        <img className="mr-3" src="./images/logo.svg" alt="NoImage" width='100' height='35'/> 
                    </label> 
                    <p> World Compétition </p> 
                </div> 
            </div> 

            <form className="d-inline form-inline"> 
                <input className=" form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search"/> 
                <button className=" btn btn-outline-success mr-sm-0" id='btnid' type="submit"> chercher </button> 
            </form> 
       </div> 



       <Navbar className="btn navbar" default collapseOnSelect sticky="top">
        <Navbar.Header>
          <Navbar.Brand  className="navcolor">
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              News
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



       {/* <nav className="btn navbar navbar-expand-lg navbar-light fixed-top badge navClass"> 
                 <button className="navbar-toggler pull-light card-header-actions" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"> 
                     <span className="navbar-toggler-icon"/> 
                 </button> 

                 <a className="nav-item navcolor navbar-brand nav-link btn" id="nav-home-tab"  onClick={this.num0.bind(this)} > Home </a> 


                 <div className="collapse navbar-collapse " id="navbarTogglerDemo01" > 
                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0"> 
                         <li className="nav-item block"> 
                             <a className="nav-link navcolor btn"  href="#nav-profile" onClick={this.num1.bind(this)}>  à propos  </a> 
                         </li> 
                         <li className="nav-item"> 
                             <a className="nav-link navcolor btn" href="#nav-contact" onClick={this.num2.bind(this)}>  Exemples de problemes  </a> 
                         </li> 
                         <li className="nav-item"> 
                             <a className="nav-link navcolor btn" href="#nav-contact" onClick={this.num3.bind(this)}>  Nos cours  </a> 
                         </li> 
                         <li className="nav-item"> 
                             <a className="nav-link navcolor btn" href="#nav-contact" onClick={this.num4.bind(this)}>  Contact  </a> 
                         </li> 
                        
                         <li className="nav-item dropdown"> 
                             <a className="nav-link navcolor btn dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> Compétitions </a> 
                             <div className="dropdown-menu"> 
                                 <a className="dropdown-item navcolor navClass" href="#" onClick={this.num7.bind(this)} > Liste </a> 
                                 <a className="dropdown-item navcolor navClass" href="#" onClick={this.num7.bind(this)}> en cours </a> 
                                 <a className="dropdown-item navcolor navClass" href="#" onClick={this.num7.bind(this)}> déjà terminées </a> 
                                 <a className="dropdown-item navcolor navClass" href="#" onClick={this.num7.bind(this)}> Mes favoris </a> 
                                
                             </div> 
                         </li> 
                     </ul> 

                     <div className="card-header-actions "> 
                       <a className="" href="#"  onClick={this.num6.bind(this)}> 
                       <i className="icons font-2xl d-block cui-user">  </i> se deconnecter
                       </a> 
                     </div> 

                 </div> 
                
             </nav>  */}
        
      </div>
    );
  }
}
export default NavbarC;
