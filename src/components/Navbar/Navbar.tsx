import React from "react";
import styled from "styled-components";
import { Button } from "../elements/Button";

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;

  & > div:nth-of-type(1) {
    width: 150px;
    height: 50px;
    background: #eee;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

const Li = styled.li`
  display: block;
`;

const MyLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  position: relative;

  &:hover {
  }

  &:hover::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 40%;
    width: 10px;
    height: 10px;
    background: green;
    border-radius: 50%;
  }
`;

export default () => {
  return (
    <Nav>
      <div></div>
      <Ul>
        <Li>
          <MyLink>Home</MyLink>
        </Li>
        <Li>
          <MyLink>About Us</MyLink>
        </Li>
        <Li>
          <MyLink>Category</MyLink>
        </Li>
        <Li>
          <MyLink>Blog</MyLink>
        </Li>
        <Li>
          <MyLink>Contact Me</MyLink>
        </Li>
      </Ul>
      <div>
        <Button type="button">Buy Now</Button>
      </div>
    </Nav>
  );
};
