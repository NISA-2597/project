import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResponsiveExample() {
  return (
    <Container>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col><img src='who are we.jpg'/></Col>
        
      </Row>
        <Row>
        <Col><img src='who are we.jpg'/></Col>
        </Row>
    </Container>
  );
}

export default ResponsiveExample;

