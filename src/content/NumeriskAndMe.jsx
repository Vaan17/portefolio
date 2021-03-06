import React, { useState } from "react";
import {
  BoldText,
  Flex,
  ImageFrame,
  PageContent,
  Spacing,
  SubTitle,
  SuperCard,
  Title,
} from "../styledComponent/styledComponent";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import PanToolIcon from "@mui/icons-material/PanTool";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import numerisklogo from "../img/numerisklogo.png";
import reactjs from "../img/reactjs.jpg";
import rubyonrails from "../img/rubyonrails.png";
import TypeScript from "../img/TypeScript.png";
import vscode from "../img/vscode.png";
import frontEndImage from "../img/frontEndImage.jpg";
import backEndImage from "../img/backEndImage.jpg";
import fullStackImage from "../img/fullStackImage.jpg";
import { css } from "styled-components";

const SIframe = styled.iframe`
  /* =-=-=-=-= Default =-=-=-=-= */
  border: 0;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
const ToolDiv = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  display: flex;
  align-items: end;
  font-size: 22px;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
const AnimatedArea = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  display: flex;
  justify-content: space-around;
  padding: 2em;
  padding-bottom: 5em;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
const StyledImage = styled.img`
  /* =-=-=-=-= Default =-=-=-=-= */
  transition: all 0.3s ease-in;
  transform: rotate(-10deg);
  margin-bottom: -40px;
  opacity: 0.5;
  ${({ isActive }) =>
    isActive &&
    css`
      width: 525px;
      opacity: 1;
      z-index: 100;
    `};
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
const DescArea = styled.div`
  /* =-=-=-=-= Default =-=-=-=-= */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  /* =-=-=-=-=-=-=-=-=-=-=-=-=-= */
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Section = styled.div`
  opacity: 0.5;
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
    `};
  transition: all 0.3s;
`;
const CompactText = styled.div`
  width: 30em;
`;
const SFlex = styled(Flex)`
  padding: 2em 0;
`;

const Tools = [
  {
    name: "Accueil",
    icon: <HomeIcon style={{ width: "35px", height: "35px" }} />,
  },
  {
    name: "Cartographie",
    icon: <MapIcon style={{ width: "35px", height: "35px" }} />,
  },
  {
    name: "Main Courante",
    icon: <PanToolIcon style={{ width: "35px", height: "35px" }} />,
  },
  {
    name: "Mes Donn??es",
    icon: <ContactPhoneIcon style={{ width: "35px", height: "35px" }} />,
  },
  {
    name: "Coop??ration",
    icon: <PeopleIcon style={{ width: "35px", height: "35px" }} />,
  },
  {
    name: "Documents",
    icon: <DescriptionIcon style={{ width: "35px", height: "35px" }} />,
  },
];

const NumeriskAndMe = () => {
  const [currentIndexHover, setCurrentIndexHover] = useState(0);
  return (
    <PageContent>
      <SuperCard>
        <Title>L'application Num??risk un peu plus en d??tail :???</Title>

        <SFlex justifyCenter gap={10}>
          <img src={numerisklogo} alt="Logo Numerisk" width="650px" />
          <Flex flexColumn>
            {Tools.map((tool, index) => {
              let isLastTool = false;
              if (index === Tools.length - 1) {
                isLastTool = true;
              }
              return (
                <>
                  <ToolDiv>
                    {tool.icon} &emsp; {tool.name}
                  </ToolDiv>
                  {!isLastTool && <Spacing spacing="2em" />}
                </>
              );
            })}
          </Flex>
        </SFlex>
      </SuperCard>

      <Spacing spacing="3em" />

      <SuperCard>
        <Title>Pr??sentation de l'entreprise :</Title>
        <Flex gap={5}>
          <ImageFrame>
            <SIframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.3559819581556!2d-1.1559088247104978!3d46.148501456785056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480153a9ac4e7ffb%3A0x99beb57145cdbbe6!2zTlVNw4lSSVNL!5e0!3m2!1sfr!2sfr!4v1635877929619!5m2!1sfr!2sfr"
              width="600px"
              height="400px"
              allowfullscreen=""
              loading="lazy"
            ></SIframe>
          </ImageFrame>
          <Flex flexColumn spaceAround>
            <Flex flexColumn>
              <SubTitle>Co-dirigeants :</SubTitle>
              <div>HEYMES Paul</div>
              <div>FISCHER Amaury</div>
            </Flex>

            <Spacing spacing="2em" />

            <Flex flexColumn>
              <SubTitle>Salari??s :</SubTitle>
              <div>THOMINE Alexis</div>
              <div>AIM?? Melvin</div>
            </Flex>

            <Spacing spacing="2em" />

            <Flex flexColumn>
              <SubTitle>Stagiaires :</SubTitle>
              <div>Cl??ment</div>
              <div>Baptiste</div>
              <div>Alexian</div>
            </Flex>
          </Flex>
          <Flex flexColumn justifyCenter>
            <SubTitle>Coordonn??es :</SubTitle>
            <div>1 Rue Alexander Fleming???</div>
            <div>17000 La Rochelle???</div>
            <div>T??l??phone : 06 33 01 80 38???</div>
            <div>
              Site WEB :{" "}
              <a href="https://numerisk.fr" target="_blank" rel="noreferrer">
                https://numerisk.fr
              </a>
            </div>
          </Flex>
        </Flex>
      </SuperCard>

      <Spacing spacing="3em" />

      <SuperCard>
        <Title>Mon r??le au sein de l'entreprise : </Title>
        <AnimatedArea>
          <ImageContainer>
            <StyledImage
              src={frontEndImage}
              alt="Image front end"
              width="450px"
              isActive={currentIndexHover === 0}
            />
            <StyledImage
              src={backEndImage}
              alt="Image back end"
              width="450px"
              isActive={currentIndexHover === 1}
            />
            <StyledImage
              src={fullStackImage}
              alt="Image full stack"
              width="450px"
              isActive={currentIndexHover === 2}
            />
          </ImageContainer>
          <DescArea>
            <Section
              onMouseEnter={() => setCurrentIndexHover(0)}
              isActive={currentIndexHover === 0}
              // onMouseLeave={() => setCurrentIndexHover(undefined)}
            >
              <Title>D??veloppeur Front-End</Title>
              <CompactText>
                Grace ?? l'HTML, CSS et JavaScript, le d??veloppeur est capable de
                concevoir une page internet ou application qu???un utilisateur
                peut voir et avec lesquelles il peut interagir directement.
              </CompactText>
            </Section>
            <Section
              onMouseEnter={() => setCurrentIndexHover(1)}
              isActive={currentIndexHover === 1}
              // onMouseLeave={() => setCurrentIndexHover(undefined)}
            >
              <Title>D??veloppeur Back-End</Title>
              <CompactText>
                ?? l'oppos?? du front-end qui lui est la partie visible de
                l'iceberg, le d??v??loppeur back-end est un terme d??signant un
                logiciel devant produire un r??sultat, ainsi, le d??veloppeur est
                capable ?? la fois de g??rer et d'administrer une base de donn??es.
              </CompactText>
            </Section>
            <Section
              onMouseEnter={() => setCurrentIndexHover(2)}
              isActive={currentIndexHover === 2}
              // onMouseLeave={() => setCurrentIndexHover(undefined)}
            >
              <Title>D??veloppeur Full-Stack</Title>
              <CompactText>
                Un d??veloppeur full stack, aussi appel?? ?? d??veloppeur ?? tout
                faire ??, est capable de r??aliser la programmation d???un site ou
                d'une application web, ?? la fois en front-end et en back-end.
              </CompactText>
            </Section>
          </DescArea>
        </AnimatedArea>

        <Spacing spacing="3em" />

        <Title>Les technologies utilis??es : </Title>
        <Spacing spacing="1em" />
        <Flex spaceAround>
          <Flex flexColumn>
            <img src={reactjs} alt="reactjs-img" width="280px" height="150px" />
            <Spacing spacing="1em" />
            <div>Biblioth??que JavaScript</div>
            <div>(Front-end)</div>
          </Flex>
          <Flex flexColumn>
            <img
              src={rubyonrails}
              alt="rubyonrails-img"
              width="280px"
              height="150px"
            />
            <Spacing spacing="1em" />
            <div>Framework Web</div>
            <div>(Back-end)</div>
          </Flex>
        </Flex>
        <Spacing spacing="2em" />
        <Flex spaceAround>
          <Flex flexColumn>
            <img
              src={TypeScript}
              alt="rubyonrails-img"
              width="280px"
              height="150px"
            />
            <Spacing spacing="1em" />
            <div>Framework Web</div>
            <div>(Langage syntaxique)</div>
          </Flex>
          <Flex flexColumn>
            <img
              src={vscode}
              alt="VisualStudioCode-img"
              width="280px"
              height="150px"
            />
            <Spacing spacing="1em" />
            <div>Support de d??veloppement</div>
            <div>(??diteur de code)</div>
          </Flex>
        </Flex>
      </SuperCard>
    </PageContent>
  );
};

export default NumeriskAndMe;
