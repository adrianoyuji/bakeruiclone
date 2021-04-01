import React from "react";
import styled from "styled-components";
import Tweet from "./Tweet";
import tweets from "utils/TwitterFeed";

const FooterItemContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 10% 10%;
  flex-direction: column;
`;

const FooterSectionTitle = styled.span`
  color: white;
  font-size: 1rem;
  letter-spacing: 0.25rem;
  padding-bottom: 1.5rem;
`;

const TwitterFeed = () => {
  return (
    <FooterItemContainer>
      <FooterSectionTitle>LATEST TWEETS</FooterSectionTitle>
      {tweets.map((item, index) => (
        <Tweet
          tweet={item.tweet}
          usertag={item.usertag}
          date={item.date}
          key={index}
        />
      ))}
    </FooterItemContainer>
  );
};

export default TwitterFeed;
