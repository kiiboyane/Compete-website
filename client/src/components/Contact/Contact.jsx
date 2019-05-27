import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const Contact = () => {
  return (
    <section className="my-5" style={{marginBottom:"6em"}}>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Nous Contacter
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        c'est ainsi que le site de compettiion a la puissance a ete mises en place
        mettre de telle choses en place pourrs ut. de toutes façcon il n'a pas qlq
        il faudra vraiment suivre a la lettre pour comtinuer. un sservice de communication a été mise en place pour repondre à toutes vos questions.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Ecrivez Nous:
                </h3>
              </div>
              <p className="dark-grey-text">
                nous vous repondrons généralement dans les prochaines 24h.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Votre nom"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="votre mail"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Objet"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Message"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue" className="btn-primary" >ENVOYER</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.320065137472!2d-6.8697905850621135!3d33.98431178062443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76ce7f9462dd1%3A0x2e9c39cfa1d9e8d7!2s%C3%89cole+Nationale+Sup%C3%A9rieure+d&#39;Informatique+et+d&#39;Analyse+des+Syst%C3%A8mes!5e0!3m2!1sfr!2sma!4v1558950529959!5m2!1sfr!2sma" 
            title="l'ecole Nationale ENSIAS"
            width="100%"
            height="100%"
            frameborder="0" 
            style={{ border: 0 }}
            allowfullscreen 
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Rabat, al irfane, 94126</p>
              <p className="mb-md-0">Maroc</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+212 40 00 24 27</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Contact;