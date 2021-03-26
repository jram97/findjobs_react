import React from 'react'
import './index.css';
import { Jumbotron, Button, Container } from 'react-bootstrap'

export const MainHeader = () => {
    return (
        <div>
            <Jumbotron className="text-center main_header">
                <h1 className="fonts">No te quedes con el sueño <br /><span>Aqui encuentras el trabajo ideal</span></h1>
                <Container className="body">
                    <p>
                        Bionluk, yetenekli freelancer'ların kendilerine uygun işletmeler ve girişimlerle
                        buluştuğu, topluluk mantığıyla ​i​şleyen ​​özgürlükçü bir çalışma platformudur.
                    </p>
                </Container>
                <p>
                    <Button className="button">Explora</Button>
                </p>
            </Jumbotron>
        </div>
    )
}
