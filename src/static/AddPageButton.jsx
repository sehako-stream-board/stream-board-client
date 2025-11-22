import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddPageButton() {
  const navigate = useNavigate();

  const navigateWritePage = () => {
    navigate('/post/write');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1050,
      }}
      className="text-end"
    >
      <Button
        variant="dark"
        className="align-items-center justify-content-center rounded-4 text-center bg-dark shadow"
        style={{ width: '64px', height: '64px' }}
        onClick={navigateWritePage}
      >
        <span className="fs-1 fw-bold lh-1">+</span>
      </Button>
    </div>
  );
}

export default AddPageButton;
