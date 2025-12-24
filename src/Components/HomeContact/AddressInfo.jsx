import React from "react";
import Container from "react-bootstrap/esm/Container";


export const AddressInfo = () => {

  return (
    <div className="AddressInfo">
      <Container>
        <div className="infos">
          <div className="items">
            <i className="fa fa-envelope"></i>
            <h4>Email Address</h4>
            <a href="Email">Aliasda151993@gamil.com</a>
          </div>
          <div className="items">
            <i className="fa fa-phone"></i>
            <h4>Phone Number</h4>
            <a href="Phones">010-62410066</a>
          </div>
          <div className="items">
            <i className="fa fa-map-marked-alt"></i>
            <h4>Address</h4>
            <a href="Address">Egypt-Cairo</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddressInfo;
