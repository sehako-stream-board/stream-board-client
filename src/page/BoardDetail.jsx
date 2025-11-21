import { Col, Row } from 'react-bootstrap';

function BoardDetail() {
  return (
    <>
      <Row className="mt-4 mb-2">
        <Col>
          <Row>
            <Col>
              <span className="fs-4 text-secondary">(제목 출력)</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="text-secondary text-opacity-50">2024-01-01</span>
            </Col>
            <Col
              xs={4}
              className="text-secondary text-opacity-50 pt-1 text-end"
              style={{ fontSize: '0.8em' }}
            >
              <span>수정&nbsp;&nbsp;</span>
              <span>삭제</span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="border-top">
        <Col className="mt-3 fs-5 text-dark text-break">(내용 출력)</Col>
      </Row>
    </>
  );
}

export default BoardDetail;
