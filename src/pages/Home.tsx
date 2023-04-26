import React, { useEffect, useState } from "react";
import { Navbar, Input } from "../components";
import styled from "styled-components";
import { firebaseDAO } from "../../firebase";
import { Link } from "@reach/router";
import firestoreTest from "../data";

interface Blog {
  id: number;
  title: string;
  body: string;
  poster?: string;
  likes: number;
  author?: string;
}

const Section = styled.section`
  padding: 2rem;
`;

const Heading = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
`;

const Header = styled.header`
  background: #ddd;
  height: 80vh;
  display: grid;
  place-items: center;
`;

const ContainerOne = styled(Section)`
  padding: 1rem 3rem;
`;

const ContainerTwo = styled(Section)`
  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: minmax(100px, 1fr);
    grid-gap: 5ch;
  }
`;

const ContainerThree = styled(Section)`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, 1fr);
  grid-gap: 5ch;
  padding: 5rem;

  & > article {
    background: #ddd;
    aspect-ratio: 1/1.01;
    box-shadow: 1px 1px 9px 1px #00000075;
  }

  @media (max-width: 500px) {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: none;
    grid-auto-rows: auto;
    padding: 2rem 1rem;
    overflow-x: auto;

    & > article {
      min-width: 168px;
    }
  }
`;

const ContainerFour = styled(Section)`
  display: flex;
  flex-flow: row wrap;
  gap: 5ch;

  & > div {
    flex: 1;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Li = styled.li``;

const MyLink = styled(Link)``;

const TopPosts = ({ posts }: any) => {
  return (
    <div>
      <div>Top Posts</div>
      <Ul>
        {posts.map(({ id, title }) => (
          <Li>
            <div>
              <div>{id}</div>
              <div>{title}</div>
            </div>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default () => {
  const [blogData, setBlogData] = useState<null | [] | Blog[]>([]);

  useEffect(() => {
    // firebaseDAO.firebase.findDocById(null, "blogs", setBlogData);

    console.log("The Blog Data : ", blogData);
    // @ts-ignore
    setBlogData(firestoreTest);
  }, []);

  // useEffect(() => {
  //   console.log("The Blog Data : ", blogData);
  // }, [blogData]);

  return (
    <div>
      <Navbar />
      <main>
        <Header>
          <div>
            <Heading>Transforming Agriculture with Technology</Heading>
            <p>
              Revolutionizing Agriculture through Innovation: Explore the Latest
              Trends and Technologies in Agri-Tech with Ouranos Robotics'
              Leading Blog
            </p>
          </div>
        </Header>
        <ContainerOne>
          <div>
            <Input placeholder="Search" />
            <div>
              <div>Categories</div>
              <Ul>
                <Li>
                  <MyLink to="">Automation</MyLink>
                </Li>
                <Li>
                  <MyLink to="">IoT</MyLink>
                </Li>
                <Li>
                  <MyLink to="">Precision Agriculture</MyLink>
                </Li>
                <Li>
                  <MyLink to="">Sustainable Farming</MyLink>
                </Li>
                <Li>
                  <MyLink to="">Industry News</MyLink>
                </Li>
                <Li>
                  <MyLink to="">Case Studies</MyLink>
                </Li>
                <Li>
                  <MyLink to="">Tips & Tricks</MyLink>
                </Li>
              </Ul>
            </div>
            <TopPosts posts={blogData} />
          </div>
          <div>
            {blogData.map(() => (
              <div>
                <div></div>
                <div></div>
              </div>
            ))}
          </div>
        </ContainerOne>
      </main>
    </div>
  );
};
