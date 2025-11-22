import { useRef } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postApi } from '../api/postApi';

function BoardWrite() {
  const title = useRef();
  const content = useRef();
  const navigate = useNavigate();

  const writePost = (e) => {
    e.preventDefault();

    postApi.posting(title.current.value, content.current.value);
    navigate('/');
  };

  return (
    <Form className="mt-4" onSubmit={writePost}>
      <Col>
        <FloatingLabel label="Title" className="mb-3">
          <Form.Control
            ref={title}
            type="text"
            placeholder="제목을 입력하세요."
          />
        </FloatingLabel>
        <FloatingLabel label="Content" className="mb-3">
          <Form.Control
            ref={content}
            as="textarea"
            placeholder="내용을 입력하세요."
            style={{ height: '50vh' }}
          />
        </FloatingLabel>
        <Row>
          <Col className="text-end">
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Col>
    </Form>
  );
}

export default BoardWrite;
