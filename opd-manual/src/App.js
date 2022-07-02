import React, {useState, useEffect} from 'react';
// import 'react-loading-skeleton/dist/skeleton.css'
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Nav, Container, Footer, Content, Navbar, Header, Sidebar, Carousel, TagGroup, Tag, Message, List, Row, Col, Panel } from 'rsuite';
import './App.css';
import 'rsuite/dist/rsuite.min.css';
// import MemberIcon from '@rsuite/icons/Member';
// import ImageIcon from '@rsuite/icons/Image';
import axios from 'axios';

function App() {
    const [listNews, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const data = ['Roses are red', 'Violets are blue', 'Sugar is sweet', 'And so are you'];

    
    useEffect(() => {
        const fetchDataNews = async () => {
            setIsLoading(true);
            const result = await axios.get(`http://adminmesuji.embuncode.com/api/article?instansi_id=4`)
            setNews(result.data.data.data);
            setIsLoading(false);
        };
        fetchDataNews();
    }, []);

    return (
    <React.Fragment>
       {/* Menu */}
        <div>
                <Container className='container'>
                    <Message className='judul-website'><h4>DINAS KESEHATAN</h4></Message>
                <Navbar>
    <Navbar.Brand href="#">Selamat Datang Di Website Dinas Kesehatan</Navbar.Brand>
    <Nav>
    </Nav>
    <Nav pullRight>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Brand href="#">Email: organisasituba@gmail.com</Navbar.Brand>
                            <Navbar.Brand href="#">Call us: 085369945353</Navbar.Brand>
    </Nav>
  </Navbar>
                <Header>
                    <Nav className='navbar'>
                        <Nav.Item active>Home</Nav.Item>
                        <Nav.Menu title="Profil">
                            <Nav.Item>Sejarah</Nav.Item>
                            <Nav.Item>Selayang Pandang</Nav.Item>
                            <Nav.Item>Visi dan Misi</Nav.Item>
                            <Nav.Item>Program Kerja</Nav.Item>
                            <Nav.Menu title="Informasi">
                                <Nav.Item>Publikasi</Nav.Item>
                                <Nav.Item>Download</Nav.Item>
                            </Nav.Menu>
                        </Nav.Menu>
                        <Nav.Item>Pelayanan Publik</Nav.Item>
                        <Nav.Item>Berita </Nav.Item>
                        <Nav.Item>Artikel</Nav.Item>
                        <Nav.Item>Kontak</Nav.Item>
                    </Nav>      
                </Header>
                <Container>
                    <Content>
                        <Carousel autoplay className="custom-slider">
                            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="250" />
                            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
                            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
                            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
                            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
                            </Carousel>
                            <h5 className='judul-berita'>Berita Kami</h5>
                            <Row>
    <Col md={6} sm={12}>
                                    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, marginTop: 20 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
    <Panel header="RSUITE">
      <p>
        <small>
          A suite of React components, sensible UI design, and a friendly development experience.
        </small>
      </p>
    </Panel>
  </Panel>
    </Col>
    <Col md={6} sm={12}>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, marginTop: 20 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
    <Panel header="RSUITE">
      <p>
        <small>
          A suite of React components, sensible UI design, and a friendly development experience.
        </small>
      </p>
    </Panel>
  </Panel>
    </Col>
    <Col md={6} sm={12}>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, marginTop: 20 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
    <Panel header="RSUITE">
      <p>
        <small>
          A suite of React components, sensible UI design, and a friendly development experience.
        </small>
      </p>
    </Panel>
  </Panel>
    </Col>
    <Col md={6} sm={12}>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, marginTop: 20 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
    <Panel header="RSUITE">
      <p>
        <small>
          A suite of React components, sensible UI design, and a friendly development experience.
        </small>
      </p>
    </Panel>
  </Panel>
    </Col>
                            </Row>
                            
                            <h5 className='judul-berita'>Galeri Kami</h5>
                            <Row>
    <Col md={6} sm={12}>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, marginTop: 20 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
  </Panel>
    </Col>
    <Col md={6} sm={12}>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, marginTop: 20 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
  </Panel>
    </Col>
    <Col md={6} sm={12}>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, marginTop: 20 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
  </Panel>
    </Col>
    <Col md={6} sm={12}>
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, marginTop: 20 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
  </Panel>
    </Col>
  </Row>
                        </Content>
                        
                        <Sidebar>
                        <h5 className='kategori-berita'>Kategori Berita</h5>
                        <List bordered style={{ marginBottom: 20 }}>
                        {data.map((item, index) => (
                        <List.Item key={index} index={index}>
                            {item}
                        </List.Item>
                        ))}
                            </List>
                            
                            <h5 className='kategori-artikel'>Kategori Artikel</h5>
                            <List bordered>
                        {data.map((item, index) => (
                        <List.Item key={index} index={index}>
                            {item}
                        </List.Item>
                        ))}
                            </List>

                            <TagGroup className='tag'>
    <Tag color="red">Red</Tag>
    <Tag color="orange">Orange</Tag>
    <Tag color="yellow">Yellow</Tag>
    <Tag color="green">Green</Tag>
    <Tag color="cyan">Cyan</Tag>
    <Tag color="blue">Blue</Tag>
    <Tag color="violet">Violet</Tag>
  </TagGroup>
                    </Sidebar>
                </Container>
                <Footer className='footer'><Message type="warning" className='footer-text'>Created By @Microdata Indonesia 2022</Message></Footer>
            </Container>
        </div>
{/* Ends */}
{/* 
            {isLoading ? (
                <>
                    <SkeletonTheme color="#e1e3e6" highlightColor="#a2a4a6" className="skeleton-theme">
                        <Skeleton className="skeleton-custom" width={420} height={250} count={1} />
                    </SkeletonTheme>
                </>
            ) : (
                <>
                    <div className="row mx-auto">
                    {listNews.map((item, i) =>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="course_card">
                                <div className="course_card_img">
                                    <img src={ item.image_file_data } alt="course" />
                                </div>
                                <div className="course_card_content">
                                    <h3 className="title">{ item.title }</h3>
                                    <p className="description">When we are no longer able to change a situation - we are challenged to change ourselves. Spread love everywhere you go. Let no one ever come to you without leaving happier. Problems are not stop signs, they are guidelines.</p>
                                </div>
                                <div className="course_card_footer">
                                    <a className="nav-item" href="https://www.smartcodehub.com/blog">Add Review</a>
                                    <a className="nav-item" href="https://www.smartcodehub.com/blog">Learn More</a>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </>
            )}       */}
        </React.Fragment>
    );
}

export default App;
