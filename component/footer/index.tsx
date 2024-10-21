import { Col, Row } from 'reactstrap';

import { Style } from '../common/Style';

export const Footer = {
  Component,
};

function Component() {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div className="text-center mt-4" />
      </Col>
    </Row>
  );
}
