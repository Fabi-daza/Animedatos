import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cards({dato, orden}) {
  const ordAZ = (dato) => {
    dato.sort((a,b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0)
  }

  const ordZA = (dato) => {
    dato.sort((a,b) => b.title > a.title ? 1 : b.title < a.title ? -1 : 0)
  }

  orden === 'OrdAZ' && ordAZ(dato)
  orden === 'OrdZA' && ordZA(dato)

  return (
    <div className='container'>
        {dato?.map(item => (
          <Card style={{ width: '16rem' }} className='m-2' key={item.mal_id}>
          <Card.Img variant="top" style={{height: '20rem'}} src={item.images.jpg.image_url} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text style={{height: '16rem'}} className='description'>
              {item.synopsis}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Puntuación <span>{item.score}</span></ListGroup.Item>
            <ListGroup.Item>N° de Episodios <span>{item.episodes}</span></ListGroup.Item>
            <ListGroup.Item>Género <span>{item.genres[0].name}</span></ListGroup.Item>
          </ListGroup>
        </Card>
        ))}
      </div>
    
  );
}

export default Cards;