import React from "react";
import { useParams } from "react-router-dom";
import { dataportfolio } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";

export const ProjectDetail = () => {
  const { id } = useParams(); // Get the project id from the URL params
  const project = dataportfolio.find((project) => project.id === parseInt(id)); // Find the project based on the id

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Container>
      <Row className="my-5">
        <Col lg="8">
          <h1>{project.title}</h1>
          <img src={project.img} alt={project.title} className="img-fluid" />
          <p>{project.aboutTheProject}</p>
         {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a> }
        </Col>
      </Row>
    </Container>
  );
};
