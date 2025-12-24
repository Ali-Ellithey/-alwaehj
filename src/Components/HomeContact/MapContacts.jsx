import React from "react";
import Container from "react-bootstrap/esm/Container";
import GoogleMapReact from "google-map-react";
import { Zoom } from "react-awesome-reveal";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const MapContacts = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="MapContacts">
      <Container>
        <Zoom>
          <div style={{ height: "50vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </Zoom>
        <div className="infos">
          <div className="items">
            <i className="fa fa-envelope"></i>
            <h4>Email Address</h4>
            <a href="Email">alwaehj@gmail.com</a>
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

export default MapContacts;
