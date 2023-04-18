import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../pages/images/project-img1.png";
import projImg2 from "../pages/images/project-img2.png";
import projImg3 from "../pages/images/project-img3.png";
import colorSharp2 from "../pages/images/light.png";
import 'animate.css';
import "./New.css"
import TrackVisibility from 'react-on-screen';

export const Banner2 = () => {

  const projects = [
    {
      title: "Performance UGC",
      description: `Providing User Generated Content (UGC) that converts  at scale.<br>dkdkdk`,
      text: "fkfkfkkkf",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      text: "fkfkfkkkf",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      text: "fkfkfkkkf",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      text: "fkfkfkkkf",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      text: "fkfkfkkkf",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      text: "fkfkfkkkf",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
         
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
