import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { postApi } from '../api/postApi';
import AddPageButton from '../static/AddPageButton'; // Import AddPageButton

function BoardList() {
  // eslint-disable-next-line no-unused-vars
  const [size, setSize] = useState(10);

  // eslint-disable-next-line no-unused-vars
  const [cursor, setCursor] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [posts, setPost] = useState([]);

  useEffect(() => {
    postApi
      .getPostList(cursor, size)
      .then((response) => response.data)
      .then((response) => {
        const convertedData = response.result.map((target) => {
          const createdAtDate = target.createdAt
            ? target.createdAt.split('T')[0]
            : '';
          return {
            ...target,
            createdAt: createdAtDate,
          };
        });
        setPost([...posts, ...convertedData]);
      });
  }, []);

  return (
    <>
      <Row>
        <Col className="p-3">
          {!posts.length && (
            <Row>
              <Col className="text-center position-absolute top-50 start-50 translate-middle">
                <span className="text-secondary">
                  게시글이 존재하지 않습니다.
                </span>
              </Col>
            </Row>
          )}
          {posts.map((post) => {
            return (
              <Link key={post.no} to={`/post/${post.no}`}>
                <Row className="mt-3">
                  <Col className="border ms-2 me-2">
                    <Row className="p-2">
                      <Col xs={8} className="text-secondary">
                        {post.title}
                      </Col>
                      <Col xs={4} className="text-center text-dark">
                        {post.createdAt}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Link>
            );
          })}
        </Col>
      </Row>
      <AddPageButton />
    </>
  );
}

export default BoardList;
