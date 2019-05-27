import React, { Component } from 'react';
import './Footer.css';


 class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small cyan darken-3 footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center" align="center">

                <a href="ensias.um5.ac.ma/" target="_blank"  className="fb-ic" style={{ fontSize: "12px"}}>
                  Facebook
                </a>{".../..."}
                <a href="ensias.um5.ac.ma/" target="_blank" className="tw-ic">
                  Twitter
                </a>{".../..."}
                <a href="ensias.um5.ac.ma/" target="_blank" className="gplus-ic">
                  Google
                </a>{".../..."}
                <a href="ensias.um5.ac.ma/" target="_blank" className="li-ic">
                  Linkedin
                </a>{".../..."}
                <a href="ensias.um5.ac.ma/" target="_blank" className="ins-ic">
                  Instagram
                </a>{".../..."}
                <a href="ensias.um5.ac.ma/" target="_blank" className="pin-ic">
                    Pinterest../
                </a>
              </div>
            </div>

          </div>

        </div>
        <div className="footer-copyright text-center py-3">© 2019 Copyright:
          <a  target="_blank" href="ensias.um5.ac.ma/"> ENSIAS.ma</a>
        </div>

      </footer>

    )
  }
}

export default Footer;
