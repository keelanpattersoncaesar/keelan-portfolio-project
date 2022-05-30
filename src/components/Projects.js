import React from "react";
import { 
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  CardGroup,
  Button,
 } from "reactstrap";
import RabbitImage from "../assets/RabbitHoleLogo.png";
import FreshOrange from "../assets/freshorange.png";
import CrystalBall from "../assets/crystalball.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen bg-[#E9C46A]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col text-center justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            PROJECTS
          </p>
          <p className="py-4 text-3xl font-semibold">
            SOME OF THE THINGS I'VE DONE!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <CardGroup className="flex items-stretch">
            <Card className="flex flex-col justify-center items-center border-2 border-[#E76F51] p-2">
              <CardImg alt="Card image cap" src={RabbitImage} top width="40%" />
              <CardBody>
                <CardTitle className="text-xl font-bold text-center">
                  Rabbit Hole
                </CardTitle>
                <CardSubtitle
                  className="italic mb-2 text-center text-muted"
                  tag="h6"
                >
                  Keep Digging!
                </CardSubtitle>
                <CardText className="text-center">
                  Rabbit Hole is an online platform for open discussions about
                  any topic. Users can create new burrows, which serve as a
                  central hub for conversation on interesting subjects. Features
                  full CRUD functionality. Made in React.js and Ruby on Rails.
                </CardText>
                <div className="flex flex-row justify-evenly pt-1">
                  <a href="https://arck-lab-rabbit-hole.herokuapp.com/">
                    <Button className="group text-white border-2 px-3 py-2 flex items-center bg-[#E76F51] hover:bg-[#EE9882] hover:text-black hover:border-[#E76F51]">
                      Demo
                    </Button>
                  </a>

                  <a href="https://github.com/ARCK-LEARN-Academy/Rabbit-Hole">
                    <Button className="group text-white border-2 px-3 py-2 flex items-center bg-[#E76F51] hover:bg-[#EE9882] hover:text-black hover:border-[#E76F51]">
                      Github
                    </Button>
                  </a>
                </div>
              </CardBody>
            </Card>
          </CardGroup>

          <CardGroup className="flex items-stretch">
            <Card className="flex flex-col justify-center items-center border-2 border-[#E76F51] p-2">
              <CardImg alt="Card image cap" src={FreshOrange} top width="65%" />
              <CardBody>
                <CardTitle className="text-xl font-bold text-center">
                  Fruity Counter
                </CardTitle>
                <CardSubtitle
                  className="italic mb-2 text-center text-muted"
                  tag="h6"
                >
                  1... 2... 3...
                </CardSubtitle>
                <CardText className="text-center">
                  Use the two independent counters to keep track of what you
                  need to! Made in Redux.js and Tailwind CSS.
                </CardText>
                <div className="flex flex-row justify-evenly pt-1">
                  <a href="https://github.com/keelanpattersoncaesar/redux-counter-app/tree/keelanbranch/redux-essentials-example">
                    <Button className="group text-white border-2 px-3 py-2 flex items-center bg-[#E76F51] hover:bg-[#EE9882] hover:text-black hover:border-[#E76F51]">
                      Demo
                    </Button>
                  </a>
                  <a href="https://github.com/keelanpattersoncaesar/redux-counter-app/tree/keelanbranch/redux-essentials-example">
                    <Button className="group text-white border-2 px-3 py-2 flex items-center bg-[#E76F51] hover:bg-[#EE9882] hover:text-black hover:border-[#E76F51]">
                      Github
                    </Button>
                  </a>
                </div>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup className="flex items-stretch">
            <Card className="flex flex-col justify-center items-center border-2 border-[#E76F51] p-2">
              <CardImg alt="Card image cap" src={CrystalBall} top width="40%" />
              <CardBody>
                <CardTitle className="text-xl font-bold text-center">
                  Toxic Fortune Teller
                </CardTitle>
                <CardSubtitle
                  className="italic mb-2 text-center text-muted"
                  tag="h6"
                >
                  Stare into my crystal ball...
                </CardSubtitle>
                <CardText className="text-center">
                  Text-based adventure game. What will Madame Bootleg determine
                  about your future? Made in Ruby. * Sequel in Progress *
                </CardText>
                <div className="flex flex-row justify-evenly pt-1">
                  {/* <Button className="group text-white border-2 px-3 py-2 flex items-center bg-[#E76F51] hover:bg-[#EE9882] hover:text-black hover:border-[#E76F51]">
                    Demo
                  </Button> */}
                  <a href="https://github.com/learn-academy-2022-alpha/ruby-challenges/blob/main/fortune-teller.rb">
                    <Button className="group text-white border-2 px-3 py-2 flex items-center bg-[#E76F51] hover:bg-[#EE9882] hover:text-black hover:border-[#E76F51]">
                      Github
                    </Button>
                  </a>
                </div>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default Projects;
