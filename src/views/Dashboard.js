import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import campagne from "Campagne.jpg";
import castañeda from "castañeda.jpg";
import gonzalez from "GonzálezHerrera.png";
import gurrola from "GurrolaAntuna.jpg";
import herrera from "Herrera_Ortiz.jpg";
import ibarra from "mujer.webp";
import leon from "Leon_Quintana.png";
import luna from "luna.jpeg";
import manzanilla from "manzanilla.jpg";
import ontiveros from "ontiveros.png";
import renteria from "hombre.png";
import reyna from "reyna.jpg";
import rios from "rios.jpeg";
import sanchez from "Sanchez_Daniel.jpeg";
import soto_cervantes from "soto cervantes.jpg";
import soto_graciano from "SotoGraciano.jpg";
import vallejo from "vallejo.jpg";
import zaldivar from "zaldivar.jpeg";

const alumnos = [
  { id: 1, nombre: "CAMPAGNE CARRASCO GUSTAVO", foto: campagne },
  { id: 2, nombre: "CASTAÑEDA RIOS BERNARDO", foto: castañeda },
  { id: 3, nombre: "GONZALEZ HERRERA DIEGO ERUBIEL", foto: gonzalez },
  { id: 4, nombre: "GURROLA ANTUNA JONATHAN ESAU", foto: gurrola },
  { id: 5, nombre: "HERRERA ORTIZ PAOLA", foto: herrera },
  { id: 6, nombre: "IBARRA ORTEGA MARLENNE IMELDA", foto: ibarra },
  { id: 7, nombre: "LEON QUINTANA GRACIELA IRENE", foto: leon },
  { id: 8, nombre: "LUNA HERNANDEZ JOSE LUIS", foto: luna },
  { id: 9, nombre: "MANZANILLA CASTRO MIGUEL ANGEL", foto: manzanilla },
  { id: 10, nombre: "ONTIVEROS DAVILA LUIS EDUARDO", foto: ontiveros },
  { id: 11, nombre: "RENTERIA MEZA ANGEL EDUARDO", foto: renteria },
  { id: 12, nombre: "REYNA GONZALEZ JOSE SAMUEL", foto: reyna },
  { id: 13, nombre: "RIOS TORRES DIEGO ALEXIS", foto: rios },
  { id: 14, nombre: "SANCHEZ ESQUIVEL DANIEL ABRAHAM", foto: sanchez },
  { id: 15, nombre: "SOTO CERVANTES ALMA DIANA", foto: soto_cervantes },
  { id: 16, nombre: "SOTO GRACIANO VICTOR EMMANUEL", foto: soto_graciano },
  { id: 17, nombre: "VALLEJO CORRAL EDGAR ARTURO", foto: vallejo },
  { id: 18, nombre: "ZALDIVAR FLORES MAURO OMAR", foto: zaldivar },
];

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          {alumnos.map((alumno, index) => (
            <Col lg="3" md="6" sm="6" key={index}>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">ALUMNO {alumno.id}</p>
                        <CardTitle tag="p">{alumno.nombre}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats"></div>
                  <a href="/" className="simple-text logo-mini">
                    <div className="logo-img">
                      <img src={alumno.foto} alt={`Foto de ${alumno.nombre}`} />
                    </div>
                  </a>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
