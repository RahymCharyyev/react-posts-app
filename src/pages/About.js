import React from "react";
import { Button, Card } from "react-bootstrap";
import img from "../assets/about.jpg";

const About = () => {
  return (
    <>
      <h1 className="text-center">Обо мне</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          style={{
            alignItems: "center",
            width: "30rem",
          }}
        >
          <Card.Img
            variant="top"
            src={img}
            style={{ width: "270px", borderRadius: "10px", marginTop: "20px" }}
          />
          <Card.Body>
            <Card.Title className="text-center">Чарыев Рахим</Card.Title>
            <Card.Text>
              Меня зовут Чарыев Рахим. Родился 6 апреля 2000 года в солнечном
              городе Ашхабад, Туркменистан. Я ответственный
              Фронтенд-разработчик, могу качественно и быстро “ресерчить” и
              “гуглить” информацию, а также искать решение ошибок и багов. Не
              слепо пишу код, а решаю проблемы бизнеса, инициативный, предлагаю
              свои методы решения проблем, также умею слушать чужие мнения). На
              данный момент мой основной инструмент это React.js и его
              экосистема, продолжаю развиваться в эту сторону, но также имел
              опыт работы с Vue.js. Недавно начал погружаться в тему
              TypeSctipt’a. Понимаю работу браузера, SEO ботов, и был опыт
              успешной оптимизации сайтов. С портфолио вы можете ознакомиться по
              кнопке ниже.
            </Card.Text>
            <div className="text-center">
              <Button variant="primary" href="https://github.com/RahymCharyyev">
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
