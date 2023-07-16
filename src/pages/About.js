import React from "react";
import { Button, Card } from "react-bootstrap";
import img from "../assets/about.jpg";

const About = () => {
  return (
    <>
      <h1 className="text-center">Обо мне</h1>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: "30rem" }}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={img}
              style={{
                width: "270px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            />
          </div>
          <Card.Body>
            <Card.Title className="text-center">Чарыев Рахим</Card.Title>
            <Card.Text>
              Меня зовут Чарыев Рахим. Родился 6 апреля 2000 года в солнечном
              городе Ашхабад, Туркменистан. Я ответственный
              фронтенд-разработчик, способный качественно и быстро искать
              информацию и решать ошибки и баги. Не просто пишу код, а решаю
              бизнес-проблемы, инициативный и предлагаю свои решения. Мой
              основной инструмент на данный момент - React.js и его экосистема,
              но также имею опыт работы с Vue.js. Я также изучаю TypeScript и
              понимаю работу браузера и SEO-ботов. У меня есть опыт успешной
              оптимизации сайтов. Вы можете ознакомиться с моим портфолио по
              ссылке ниже.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary" href="https://linktr.ee/rahymcharyyev">
                Моё портфолио
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default About;
