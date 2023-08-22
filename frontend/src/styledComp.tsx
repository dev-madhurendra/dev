import styled from "styled-components";

export const TwitterFeedContainer = styled.div`
  position:absolute;
  display: flex;
  justify-content:center;
  align-items:center;
  margin-left:25%;
  margin-top:100px;
  width:50vw;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-bottom:200px;
`;

export const TweetContainer = styled.div`
  display: flex;
  justify-content:space-between;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  margin:20px;
  `;

export const TweetContainer2 = styled.div`
  display: flex;
  justify-content:space-between;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  width: 95%;
  box-sizing: border-box;
  `;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
  align-self: center;
`;

export const TweetContent = styled.div`
  flex-grow: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Username = styled.div`
  font-weight: bold;
`;

export const Body = styled.div`
  margin: 12px 2px;
  text-align: left;
`;

export const TweetStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryText = styled.span`
  color: gray;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  background-color: whitesmoke;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 10px;
  width: 50vw;
  font-size:20px;
  height:50px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px lightblue;
  }
`;

export const Input1 = styled.input`
  border: 1px solid #ddd;
  border-radius: 2px;
  width: 20rem;
  height:40px;
  padding:10px;
  font-size:20px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px lightblue;
  }
  background-color: whitesmoke;
`;

export const VerifiedIcon = styled.img`
  width: 22px;
  height: 15px;
  margin-left: 5px;
`;

export const Status = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
