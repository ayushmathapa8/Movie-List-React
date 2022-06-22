import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomList = ({ movie = {}, func, inSearchForm }) => {
  const { Title, Poster, imdbRating } = movie;
  return (
    <Card
      style={{ width: "100%" }}
      className="mt-3 d-flex flex-row justify-content-between"
    >
      <div style={{ width: "500px" }}>
        {" "}
        <Card.Img variant="top" src={movie.Poster} style={{ width: "400px" }} />
      </div>
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>Ratign: {imdbRating}</Card.Title>
        {inSearchForm ? (
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="primary"
              onClick={() => func({ ...movie, mood: "happy" })}
            >
              Happy
            </Button>
            <Button
              variant="danger"
              onClick={() => func({ ...movie, mood: "romantic" })}
            >
              Romantic
            </Button>
          </div>
        ) : (
          <div className="d-grid gap-2">
            <Button
              variant="danger"
              size="lg"
              onClick={() => func(movie.imdbID)}
            >
              Delete movie
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomList;
