import React from "react";
import { Link } from "react-router-dom";

export class NotFound extends React.Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.is404 = true;
    }
  }
  
  render() {
    return (
      <div className = "not-found">
        <h1> 404 </h1>
        <h2> Page not found </h2>
        <p> <Link to = "/"> Go back to main page </Link> </p>
      </div>
    )
  }
}

export default NotFound;