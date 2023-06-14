import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Filtro = ({ dato, search, orden }) => {
    let resultadoBusqueda = []
    if (!search){
        resultadoBusqueda = []
    } else{
        resultadoBusqueda = dato.filter((u) =>
        u.title.toLowerCase().includes(search.toLowerCase()))
    }

    const ordAZ = (resultadoBusqueda) => {
      resultadoBusqueda.sort((a,b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0)
    }

    const ordZA = (resultadoBusqueda) => {
      resultadoBusqueda.sort((a,b) => b.title > a.title ? 1 : b.title < a.title ? -1 : 0)
    }
  
    orden === 'OrdAZ' && ordAZ(resultadoBusqueda)
    orden === 'OrdZA' && ordZA(resultadoBusqueda)

    

    return (
        <div className='container'>
        {resultadoBusqueda?.map(item => (
          <Card style={{ width: '16rem' }} className='m-2' key={item.mal_id}>
          <Card.Img variant="top" src={item.images.jpg.image_url} />
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
    )
}

export default Filtro