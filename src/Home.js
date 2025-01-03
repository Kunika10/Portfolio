import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import resume from './assets/Kunika Gupta _Resume.pdf';
import design from './assets/images/web-design.png';
import developer from './assets/images/developer.png';
import work from './assets/images/work.png';
import certificate from './assets/images/certificate.png';
import requirements from './assets/images/requirements.png';
import ui from './assets/images/ui.png';
import html5 from './assets/images/html5.png';
import css3 from './assets/images/css3.png';
import react from './assets/images/react.png';
import bootstrap from './assets/images/bootstrap.png';
import wordpress from './assets/images/wordpress.png';
import figma from './assets/images/figma.png';
import photoshop from './assets/images/photoshop.png';
import project1 from './assets/images/project1.png';
import project2 from './assets/images/project2.png';
import project3 from './assets/images/project3.png';
import project4 from './assets/images/project4.png';
import project5 from './assets/images/project5.png';
import project6 from './assets/images/project6.png';
import contact from './assets/images/contact.jpg';



function Home() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>

            {/* Banner */}
            <section id='home'>
                <div className="hero-wrap">
                    <div className='hero-mask'></div>
                    <div className='hero-bg'></div>
                    <div className='hero-content'>
                        <Container>
                            <div className='hero-title' data-aos="fade-left" data-aos-duration="3000">
                                <h1>Turning Vision Into Reality With Code And Design.</h1>
                                <p>As a skilled <span>F</span>ront-<span>E</span>nd developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects showcasing my expertise in Desiging and Development.</p>
                                <a href='#contact'>Hire Me</a>
                            </div>
                        </Container>
                    </div>
                </div>
            </section>
            {/* Banner */}

            {/* About */}
            <section id='about' className='section'>
                <div className='about'>
                    <div className='container'>
                        <div className='about-sec'>
                            <h2>About Me</h2>
                            <p>Know Me More</p>
                            <span></span>
                        </div>
                        <div className='about-section'>
                            <Row>
                                <Col lg={8} md={12} xs={12}>
                                    <div className='about-left'>
                                        <h2 className='myname'>
                                            Hey
                                            <span>!</span>
                                        </h2>
                                        <span className='myname'>I'm
                                            <span className='myname-ml'>Kunika Gupta</span>
                                        </span>
                                        <p className='about-para'>A skilled and creative UX/UI Designer and Frontend Developer from Gwalior, Madhya Pradesh, India. With a background in Chemical Engineering, I found my true passion in web design and development. Proficient in HTML5, CSS3, WordPress, Bootstrap, JavaScript, and ReactJs. I create visually appealing and user-friendly interfaces that follow the latest UX/UI best practices. </p>
                                        <p className='about-para'>My dedication to clean and well-documented code ensures efficient and optimized web solutions. With certifications in digital marketing, soft skills, data science, and Adobe software, I strive to stay updated with industry trends. I am committed to contributing my technical and analytical skills to meaningful projects and advancing my career in web design.</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={12} xs={12}>
                                    <div className='about-right' data-aos="fade-left" data-aos-duration="3000">
                                        <ul>
                                            <li>
                                                <span>Name:</span> Kunika Gupta
                                            </li>
                                            <li>
                                                <span>Email:</span> guptakunika10@gmail.com
                                            </li>
                                            <li className='border-0'>
                                                <span>From:</span> Gwalior, Madhya Pradesh
                                            </li>
                                        </ul>
                                        <Link to={resume} download="Kunika-Gupta-Resume" target="_blank">Download CV</Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
            {/* About */}

            {/* Services */}
            <section id='services' className='section bg-light'>
                <div className='services'>
                    <Container>
                        <div className='about-sec'>
                            <h2>Services</h2>
                            <p>What I Do?</p>
                            <span></span>
                        </div>
                        <div className='services-sec'>
                            <Row>
                                <Col lg={4} md={12} xs={12}>
                                    <div className='mi-service'>
                                        <div className='mi-service-icon'>
                                            <img src={design} />
                                        </div>
                                        <h5>Web Design</h5>
                                        <p>Creating visually appealing and user-friendly interfaces for websites, focusing on layout, graphics, and interactive elements to enhance user experience.</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={12} xs={12}>
                                    <div className='mi-service'>
                                        <div className='mi-service-icon'>
                                            <img src={developer} />
                                        </div>
                                        <h5>Web Development</h5>
                                        <p>Building and maintaining websites and web applications using programming languages and technologies for functionality, interactivity, and user engagement.</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={12} xs={12}>
                                    <div className='mi-service'>
                                        <div className='mi-service-icon'>
                                            <img src={ui} />
                                        </div>
                                        <h5>UX/UI Design</h5>
                                        <p>UX/UI design involves creating user-centric interfaces (UX) with visually appealing and interactive elements (UI) to enhance user satisfaction and experience.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
            {/* Services */}

            {/* Resume */}
            <section id='resume' className='section'>
                <div className='resume'>
                    <Container>
                        <div className='about-sec'>
                            <h2>Summary</h2>
                            <p>Resume</p>
                            <span></span>
                        </div>
                        <div className='resume-sec'>
                            <div className='mi-title'>
                                <span className='mi-icon'>
                                    <img src={work} />
                                </span>
                                <h4>Working Experience</h4>
                            </div>
                            <div className='mi-resume-wrapper'>
                                <div className='mi-resume'>
                                    <div className='mi-resume-summary'>
                                        <h6>12/2022 - Present</h6>
                                    </div>
                                    <div className='mi-resume-details'>
                                        <h5>Software Developer</h5>
                                        <h6>Webcoir IT Solution Private Limited</h6>
                                        <ul>
                                            <li>Built and maintained high-quality, responsive web applications using HTML5, CSS3, and jQuery.</li>
                                            <li>Created design systems to standardize branding, boosting team efficiency by 30%.</li>
                                            <li>Performed cross-browser testing across 5+ platforms, ensuring 100% compatibility and seamless functionality for both desktop and mobile devices.</li>
                                            <li>Optimized website performance, reducing load times by 40% and enhancing navigation.</li>
                                            <li>Resolved front-end issues collaboratively, improving debugging efficiency by 50%.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mi-resume'>
                                    <div className='mi-resume-summary'>
                                        <h6>12/2021 - 11/2022</h6>
                                    </div>
                                    <div className='mi-resume-details'>
                                        <h5>UI Developer</h5>
                                        <h6>Task Source Private Limited</h6>
                                        <ul>
                                            <li>Developed secure, responsive e-commerce platforms, increasing mobile traffic by 15%.</li>
                                            <li>Maintained product categories, promotions, and reviews for online interfaces, driving a 12% increase in sales.</li>
                                            <li>Translated mockups into functional, pixel-perfect web pages with HTML5/CSS3.</li>
                                            <li>Improved user navigation flow, resulting in a 10% increase in page views per session.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='mi-mt'></div>

                            <div className='mi-title'>
                                <span className='mi-icon'>
                                    <img src={certificate} />
                                </span>
                                <h4>Educational Qualifications</h4>
                            </div>
                            <div className='mi-resume-wrapper'>
                                <div className='mi-resume'>
                                    <div className='mi-resume-summary'>
                                        <h6>2017 - 2021</h6>
                                    </div>
                                    <div className='mi-resume-details'>
                                        <h5>Bachelor of Technology</h5>
                                        <h6>Madhav Institute of Technology and Science</h6>
                                        <p>This program equipped me with a deep understanding of chemical processes, engineering principles, and problem-solving skills, preparing me for a rewarding career in the field.</p>
                                    </div>
                                </div>
                                <div className='mi-resume'>
                                    <div className='mi-resume-summary'>
                                        <h6>2016 - 2017</h6>
                                    </div>
                                    <div className='mi-resume-details'>
                                        <h5>Higher Secondary</h5>
                                        <h6>Govt. Padma Girls Higher Secondary School</h6>
                                        <p>I completed my higher secondary education with a focus on science subjects. This educational phase provided a comprehensive understanding of fundamental scientific concepts and prepared me for further academic pursuits.</p>
                                    </div>
                                </div>
                                <div className='mi-resume'>
                                    <div className='mi-resume-summary'>
                                        <h6>2014 - 2015</h6>
                                    </div>
                                    <div className='mi-resume-details'>
                                        <h5>High School</h5>
                                        <h6>Govt. Padma Girls Higher Secondary School</h6>
                                        <p>During high school, I acquired a well-rounded education with a focus on various subjects. This phase laid the foundation for my academic journey and helped shape my interests and career aspirations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mi-mt'></div>
                        <div className='skills'>
                            <div className='mi-title'>
                                <span className='mi-icon'>
                                    <img src={requirements} />
                                </span>
                                <h4>Skills</h4>
                            </div>
                            <div className='skill-wrapper'>
                            <Slider {...settings}>
                                <div className='allskill'>
                                    <div className='skillsimgwrapper'>
                                        <img src={html5} />
                                    </div>
                                    <h4>HTML5</h4>
                                </div>
                                <div className='allskill'>
                                    <div className='skillsimgwrapper'>
                                        <img src={css3} />
                                    </div>
                                    <h4>CSS3</h4>
                                </div>
                                <div className='allskill'>
                                    <div className='skillsimgwrapper'>
                                        <img src={react} />
                                    </div>
                                    <h4>React JS</h4>
                                </div>
                                <div className='allskill'>
                                    <div className='skillsimgwrapper'>
                                        <img src={bootstrap} />
                                    </div>
                                    <h4>Bootstrap</h4>
                                </div>
                                <div className='allskill'>
                                    <div className='skillsimgwrapper'>
                                        <img src={wordpress} />
                                    </div>
                                    <h4>Wordpress</h4>
                                </div>
                                <div className='allskill'>
                                    <div className='skillsimgwrapper'>
                                        <img src={figma} />
                                    </div>
                                    <h4>Figma</h4>
                                </div>
                                <div className='allskill'>
                                    <div className='skillsimgwrapper'>
                                        <img src={photoshop} />
                                    </div>
                                    <h4>Photoshop</h4>
                                </div>
                                </Slider>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
            {/* Resume */}

            {/* Portfolio */}
            <section id='portfolio' className='section bg-light'>
                <div className='portfolio'>
                    <Container>
                        <div className='about-sec'>
                            <h2>Portfolio</h2>
                            <p>Work</p>
                            <span></span>
                        </div>
                        <div className='portfolio-sec'>
                            <Row>
                                <Col lg={4} md={6} xs={12}>
                                    <Link to={"https://www.behance.net/kunikagupta1"} target="_blank">
                                        <div className='project'>
                                            <div className='project-img'>
                                                <img src={project1} />
                                            </div>
                                            <div className='project-title'>
                                                <h6>Digital Marketing</h6>
                                                <p>Desiging</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <Link to={"https://www.behance.net/kunikagupta1"} target="_blank">
                                        <div className='project'>
                                            <div className='project-img'>
                                                <img src={project2} />
                                            </div>
                                            <div className='project-title'>
                                                <h6>Technology</h6>
                                                <p>Desiging</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <Link to={"https://www.behance.net/kunikagupta1"} target="_blank">
                                        <div className='project'>
                                            <div className='project-img'>
                                                <img src={project3} />
                                            </div>
                                            <div className='project-title'>
                                                <h6>Real Estate</h6>
                                                <p>Desiging</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <Link to={"https://giantwheel.in/"} target="_blank">
                                        <div className='project'>
                                            <div className='project-img'>
                                                <img src={project4} />
                                            </div>
                                            <div className='project-title'>
                                                <h6>Academic</h6>
                                                <p>Development</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <Link to={"https://cpmaindia.com/"} target="_blank">
                                        <div className='project'>
                                            <div className='project-img'>
                                                <img src={project5} />
                                            </div>
                                            <div className='project-title'>
                                                <h6>Chemicals & Petrochemicals</h6>
                                                <p>Development</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col lg={4} md={6} xs={12}>
                                    <Link to={"https://radioclub.in/"} target="_blank">
                                        <div className='project'>
                                            <div className='project-img'>
                                                <img src={project6} />
                                            </div>
                                            <div className='project-title'>
                                                <h6>Radio Club</h6>
                                                <p>Development</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
            {/* Portfolio */}

            {/* Contact Us */}
            <section id='contact' className='section'>
                <div className='contact'>
                    <Container>
                        <div className='about-sec'>
                            <h2>Contact</h2>
                            <p>Get in Touch</p>
                            <span></span>
                        </div>
                        <div className='contact-sec'>
                            <Row>
                                <Col lg={6} md={6} xs={12}>
                                    <div className='contact-left' data-aos="fade-right" data-aos-duration="3000">
                                        <img src={contact} />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} xs={12}>
                                    <div className='contact-right'>
                                        <p>Feel free to get in touch with me using the contact form below. I welcome any inquiries, feedback, or collaboration opportunities. I will make it a priority to respond to you promptly.</p>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Control type="text" placeholder="Name *" required />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Control type="email" placeholder="Email *" required />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea" placeholder="Type Your Message *" rows={3} required />
                                            </Form.Group>
                                            <Link to='/' type="submit">Send</Link>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
            {/* Contact Us */}
        </>
    )
}
export default Home;
