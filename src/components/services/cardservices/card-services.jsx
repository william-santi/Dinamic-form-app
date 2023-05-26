import { Card } from 'react-bootstrap';
import './card-services.css'

export const CardServices = ({service}) => {
    const {title,subtitle,image,footer,link} = service;
  return (
    <div className='container-card-service'>
        <Card>
            <Card.Img src={image} alt={title}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{subtitle}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <a href={link} target='_blank' rel='noreferrer'>
                    {footer}
                </a>
            </Card.Footer>
        </Card>
    </div>
  )
}
