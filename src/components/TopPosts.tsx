import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  background: #fff;
  box-shadow: 0px 0px 100px 10px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  border-radius: 10px;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Li = styled.li`
  display: block;
  padding: 0.5rem 1rem;

  & > div {
    display: flex;
    align-items: center;
  }
`;

const PostIndex = styled.div`
  width: 40px;
  font-size: 2rem;
  font-weight: bold;
`;
const Title = styled.div``;

export const TopPosts = ({ posts }: any) => {
  return (
    <Container>
      <h3>Top Posts</h3>
      <Ul>
        {posts.map(({ id, title }, i) => (
          <Li>
            <div>
              <PostIndex>{i + 1}</PostIndex>
              <Title>{title}</Title>
            </div>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};
