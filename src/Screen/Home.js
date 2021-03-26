import React from 'react';
import './home.css'
import { Menu } from '../Components/Menu/Menu';
import { MainHeader } from '../Components/Main/MainHeader';
import { Jumbotron, Container, Row, Col, Card, Button } from 'react-bootstrap'

export const Home = () => {
    return (
        <>
            <Menu />
            <Container className="mx-auto" fluid>
                <MainHeader />
                <Jumbotron className="text-center content_main">
                    <h1 className="fonts">Neden Freelancer?</h1>
                    <Container className="body">
                        <p>Geleceğin "çalışma" modeliyle bugünden tanışın.</p>
                    </Container>
                </Jumbotron>
                <br />
                <Container>
                    <Row>
                        <Col sm xs lg="4">
                            <Card>
                                <Card.Img variant="top" src="https://gcdn.bionluk.com/site/general/search_bi.png" className="image" />
                                <Card.Body className="text-center">
                                    <Card.Title>Sınırsızlık, Özgürleştirir</Card.Title>
                                    <Card.Text>Becerikli bir işveren, kaynaklarını en verimli nasıl kullanacağını bilen iş verendir. Kaynaklarınızı olabildiğince verimli kullanmak adına freelancer’lara şans verin; göreceksiniz ki her akıl, her işe değer katar.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm xs lg="4"><Card>
                            <Card.Img variant="top" src="https://gcdn.bionluk.com/site/general/contact-order_bi.png" className="image" />
                            <Card.Body className="text-center">
                                <Card.Title>Aklın Yolu Free</Card.Title>
                                <Card.Text>Sınırsız düşünebilmeniz için bütün sınırları kaldırdık. Artık yalnızca bulunduğunuz bölgeden değil dünyanın her yerinden global yeteneklerle, özgürce çalışabilmeniz için...</Card.Text>
                            </Card.Body>
                        </Card></Col>
                        <Col sm xs lg="4"><Card>
                            <Card.Img variant="top" src="https://gcdn.bionluk.com/site/general/done_bi.png" className="image" />
                            <Card.Body className="text-center">
                                <Card.Title>Bakış Açınızı Genişletin</Card.Title>
                                <Card.Text>El elden, göz gözden üstündür. Hedef kitlenizi ne kadar genişletmek isterseniz, o kadar farklı gözle bakmayı öğrenirsiniz. Biz sizin için her pencereyi açtık, bakmak size kaldı.</Card.Text>
                            </Card.Body>
                        </Card></Col>
                    </Row>
                    <Container className="mt-4">
                        <Row>
                            <Col className="text-center">
                                <a href="#" className="btn-home">Centered button</a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
            <div className="home__main">
                <Jumbotron className="home_sub_main">
                    <h1>Geleceğin "çalışma" modeliyle bugünden tanışın.</h1>
                    <div className="home_sub_div">
                        <Button className="home_sub_button">Learn more</Button>
                    </div> 
                </Jumbotron>
            </div>
        </>
    )
}
