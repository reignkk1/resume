import { Col, Row } from 'reactstrap';
import { EmptyRowCol } from '../common';
import { Style } from '../common/Style';

export const Footer = {
  Component,
};

function Component() {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-2">
          <EmptyRowCol>
            <small>Thank you.</small>
          </EmptyRowCol>

          <br />
        </div>
      </Col>
    </Row>
  );
}
