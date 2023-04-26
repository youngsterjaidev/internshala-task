import React, { useEffect, useState } from "react";
import { Navbar, Input } from "../components";
import styled from "styled-components";
import { firebaseDAO } from "../../firebase";
import { Link } from "@reach/router";
import firestoreTest from "../data";
import { TopPosts } from "../components/TopPosts";

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
  background: url(https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
    center center / cover no-repeat;
  color: #fff;
`;

const ContainerOne = styled(Section)`
  padding: 1rem 3rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 2ch;
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

const CategoryContainer = styled.div`
  padding: 1rem;
  background: #fff;
  box-shadow: 0px 0px 100px 10px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  border-radius: 10px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Li = styled.li`
  display: block;
  padding: 0.5rem 0rem;
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;

const BlogContainer = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(100px, 1fr);
  grid-gap: 2ch;
  padding: 1rem;

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

const BlogCard = styled.div`
  background: #fff;
  aspect-ratio: 1/1.3;
  box-shadow: 0px 0px 100px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  flex-flow: column nowrap;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }

  & > div:nth-of-type(2) {
    flex: 1;
    padding: 0.5rem 1rem;
    display: flex;
    flex-flow: column nowrap;
  }

  & h3 {
    margin: 0;
  }

  & p {
    flex: 1;
    color: ${(props) => props.theme.placeholderDark};
  }
`;

const Image = styled.div`
  aspect-ratio: 1/0.7;
  background url("${(props) => props.url}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px 12px 0px 0px;
  
`;

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
            <CategoryContainer>
              <h3>Categories</h3>
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
            </CategoryContainer>
            <TopPosts posts={blogData} />
          </div>
          <BlogContainer>
            {blogData.map((blog) => (
              <BlogCard>
                <Image url={blog.imageUrl}></Image>
                <div>
                  <div>
                    {blog.category} {blog.published_date}
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.description.slice(0, 110)}</p>
                  <MyLink to="/">Read Full Article</MyLink>
                </div>
              </BlogCard>
            ))}
          </BlogContainer>
        </ContainerOne>
      </main>
    </div>
  );
};
