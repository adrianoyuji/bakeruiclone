import React from "react";
import styled from "styled-components";
import instaFeed from "utils/InstagramFeed";
import FeedItem from "./FeedItem";

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

const InstaFeedContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-items: center;
`;

const InstagramFeed = () => {
  return (
    <FooterItemContainer>
      <FooterSectionTitle>INSTAGRAM FEED</FooterSectionTitle>
      <InstaFeedContainer>
        {instaFeed.map((feedItem) => (
          <FeedItem
            title={feedItem.title}
            img_url={feedItem.img_url}
            key={feedItem.title}
          />
        ))}
      </InstaFeedContainer>
    </FooterItemContainer>
  );
};

export default InstagramFeed;
