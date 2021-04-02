import React from "react";
import styled from "styled-components";

import { FaTwitter } from "react-icons/fa";

interface Props {
  date: string;
  tweet: string;
  usertag: string;
}

const TweetContainer = styled.div`
  width: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const IconContainer = styled.div`
  padding: 4px 0.5rem;
  cursor: pointer;
`;

const MessageContainer = styled.div`
  width: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DateText = styled.div`
  width: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #888;
`;

const Message = styled.span`
  display: flex;
  flex-direction: row;
  color: #666;
`;

const Tweet = ({ usertag, tweet, date }: Props) => {
  return (
    <TweetContainer>
      <IconContainer>
        <FaTwitter size={18} color="#e1be64" />
      </IconContainer>
      <MessageContainer>
        <Message>
          {usertag} {tweet}
        </Message>

        <DateText>{date}</DateText>
      </MessageContainer>
    </TweetContainer>
  );
};

export default Tweet;
