import { useMutation } from "@apollo/client";
import { useTweets } from "./Schema/Queries/useTweets";
import { CREATE_TWEET_MUTATION } from "./Schema/Mutations/createTweet";
import { DELETE_TWEET_MUTATION } from "./Schema/Mutations/deleteTweet";
import Mark from '../src/assets/mark.png'
import GreeMark from '../src/assets/double-check.png'
import {
  Avatar,
  Body,
  Footer,
  Header,
  Input,
  Input1,
  Status,
  TweetContainer,
  TweetContainer2,
  TweetContent,
  TweetStats,
  TwitterFeedContainer,
  Username,
  VerifiedIcon,
} from "./styledComp";
import { FormEvent, useState } from "react";
import { MARK_TWEET_MUTATION } from "./Schema/Mutations/markTweetAsRead";
import { users } from "./users";
import { Button } from "@material-ui/core";

interface TweetProps {
  markAsRead: boolean;
  id: string;
  body: string;
  date: Date;
  author: {
    username: string;
    avatar_url: string;
    id: string;
  };
  stats: {
    views: number;
    likes: number;
    retweets: number;
    responses: number;
  };
}

const styles = {
  display:"flex",
  justifyContent:"space-around",
  width:"200px"
}

const TwitterApp = () => {
  const [showAll, setShowAll] = useState({
    id:"",
    isShowAll:false
  });

  const showMore = (_id : string) => setShowAll({
    id:_id,
    isShowAll:true
  });

  const showLess = (_id : string) => setShowAll({
    id:"",
    isShowAll:false
  });

  const { loading, error, data, refetch } = useTweets();
  const [createTweet] = useMutation(CREATE_TWEET_MUTATION);
  const [deleteTweet] = useMutation(DELETE_TWEET_MUTATION);
  const [markTweetRead] = useMutation(MARK_TWEET_MUTATION);

  console.log(data,"data");
  
  const userId = sessionStorage.getItem("userId");
  const userName = users[userId ? +userId - 1 : 0]?.username;
  console.log("userId",userId);
  

  const [body, setBody] = useState("");
  const [searchValue,setSearchValue] = useState("");
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCreateTweet(body,userId);
    setBody("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };
  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error while fetching data </p>;

  const handleCreateTweet = async (body: any,userId: any) => {

    try {
      
      const res =  await createTweet({ variables: { body,userId } });
      console.log("res.data, " , res.data);



      refetch();


    } catch (error) {
      console.error("error" , error);
    }
  };

  const handleDeleteTweet = async (id: any) => {
    try {
      await deleteTweet({ variables: { id } });
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const markingAsRead = async (id: any) => {
    try {
      await markTweetRead({ variables: { id } });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  console.log("data.tweets",data.tweets);
  




  return (
    <TwitterFeedContainer>
      <div style={{position:"fixed",top:0}} className="">
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            name="body"
            placeholder={`Tweet as @${userName}`}
            value={body}
            onChange={handleInputChange}

          />
        </form>
      </div>
      <TweetContainer2>
        <img src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" alt="logo" width={50} height={50} />

        <div style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>
          <Input1
              type="text"
              name="body"
              placeholder="Search Tweets by username"
              value={searchValue}
              onChange={handleInputChange2}
          />
        </div>

      </TweetContainer2>

      {
        searchValue.length > 0 
        ?
        data.tweets.filter((tweet : TweetProps) => {
          return tweet.author.username.toLocaleLowerCase().includes(searchValue)
        }).length == 0 ? <p>User not found</p> : 
        data.tweets.filter((tweet : TweetProps) => {
          return tweet.author.username.toLocaleLowerCase().includes(searchValue)
        }).map((tweet: TweetProps) => (
          <TweetContainer key={tweet.id} style={ tweet.markAsRead ? {
            border:"1px solid green"
          } : { border:"1px solid black"} }>
            <Avatar src={tweet.author?.avatar_url || ""} alt="Avatar" />
            <TweetContent>
              <Header>
                <Username>
                  @{tweet.author?.username || "Unknown"}
                  <VerifiedIcon
                    src="https://www.pngmart.com/files/12/Twitter-Verified-Badge-Transparent-Background.png"
                    alt="tickMark"
                    width="25px"
                    height="18px"
                  />
                </Username>
  
                <Status onClick={() => markingAsRead(tweet.id)}>
                  {tweet.markAsRead ? (
                    <Status >
                      <img src={GreeMark} alt="Mark" width={30} height={30} />
                    </Status>
                  ) : (
                    <Status >
                      <img src={Mark} alt="Mark" width={30} height={30} />
                    </Status>
                  )}
                </Status>
              </Header>
  
              <Body>
                {tweet.body.length <= 100 && 
                  <div>
                    {tweet.body}
                  </div>
                }
                {tweet.body.length>100 && (showAll.isShowAll)  &&  (showAll.id)  && (tweet.id === showAll.id) &&
                    <div>
                        {tweet.body}
                        <button onMouseOver={() => showLess(tweet.id)} style={{
                            outline:"none",
                            background:"none",
                            border:"none",
                            color:"blue",
                            cursor:"pointer"
                        }}>Read less</button> 
                    </div>
                }
                {tweet.body.length>100 && (tweet.id !== showAll.id) &&
                    <div>
                        {tweet.body.substring(0, 100) + "..."} 
                        <button onMouseMove={() => showMore(tweet.id)} style={{
                            outline:"none",
                            background:"none",
                            border:"none",
                            color:"blue",
                            cursor:"pointer"
                        }}>Read more</button>
                    </div>
                }
              </Body>
  
              <Footer>
                <TweetStats>
                  <div style={styles}>
  
                    <div>
                      <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      <div className="comment-count">{tweet.stats?.likes}</div>
                    </div>
  
                    <div>
                      <svg className="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                      <div className="comment-count">{tweet.stats?.retweets}</div>
                    </div>
  
                    <div>
                      <svg className="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                      <div className="comment-count">{tweet.stats?.responses}</div>
                    </div>
  
                    <div>
                      <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={tweet.stats.likes > 0 ? "red" : "none" } stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      <div className="comment-count">{tweet.stats?.views}</div>
                    </div>
  
                  </div>
                </TweetStats>
                {userId === tweet.author.id && <button onClick={userId === tweet.author.id ? () => handleDeleteTweet(tweet.id)
                 : () => {}} style={{
                    backgroundColor:"transparent",
                    outline:"none",
                    border:"none",
                    cursor:"pointer"
                  }} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" id="delete" ><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                </button>}
              </Footer>
            </TweetContent>
          </TweetContainer>
        ))
        :
        data.tweets.map((tweet: TweetProps) => (
          <TweetContainer key={tweet.id} style={ tweet.markAsRead ? {
            border:"1px solid green"
          } : { border:"1px solid black"} }>
            <Avatar src={tweet.author?.avatar_url || ""} alt="Avatar" />
            <TweetContent>
              <Header>
                <Username>
                  @{tweet.author?.username || "Unknown"}
                  <VerifiedIcon
                    src="https://www.pngmart.com/files/12/Twitter-Verified-Badge-Transparent-Background.png"
                    alt="tickMark"
                    width="25px"
                    height="18px"
                  />
                </Username>
  
                <Status onClick={() => markingAsRead(tweet.id)}>
                  {tweet.markAsRead ? (
                    <Status >
                      <img src={GreeMark} alt="Mark" width={30} height={30} />
                    </Status>
                  ) : (
                    <Status >
                      <img src={Mark} alt="Mark" width={30} height={30} />
                    </Status>
                  )}
                </Status>
              </Header>
  
              <Body>
                {tweet.body.length <= 100 && 
                  <div>
                    {tweet.body}
                  </div>
                }
                {tweet.body.length>100 && (showAll.isShowAll)  &&  (showAll.id)  && (tweet.id === showAll.id) &&
                    <div>
                        {tweet.body}
                        <button onMouseOver={() => showLess(tweet.id)} style={{
                            outline:"none",
                            background:"none",
                            border:"none",
                            color:"blue",
                            cursor:"pointer"
                        }}>Read less</button> 
                    </div>
                }
                {tweet.body.length>100 && (tweet.id !== showAll.id) &&
                    <div>
                        {tweet.body.substring(0, 100) + "..."} 
                        <button onMouseMove={() => showMore(tweet.id)} style={{
                            outline:"none",
                            background:"none",
                            border:"none",
                            color:"blue",
                            cursor:"pointer"
                        }}>Read more</button>
                    </div>
                }
              </Body>
  
              <Footer>
                <TweetStats>
                  <div style={styles}>
  
                    <div>
                      <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      <div className="comment-count">{tweet.stats?.likes}</div>
                    </div>
  
                    <div>
                      <svg className="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                      <div className="comment-count">{tweet.stats?.retweets}</div>
                    </div>
  
                    <div>
                      <svg className="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                      <div className="comment-count">{tweet.stats?.responses}</div>
                    </div>
  
                    <div>
                      <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={tweet.stats.likes > 0 ? "red" : "none" } stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      <div className="comment-count">{tweet.stats?.views}</div>
                    </div>
  
                  </div>
                </TweetStats>
                {userId === tweet.author.id && <button onClick={userId === tweet.author.id ? () => handleDeleteTweet(tweet.id)
                 : () => {alert('Do not delete someone else tweets')}} style={{
                    backgroundColor:"transparent",
                    outline:"none",
                    border:"none",
                    cursor:"pointer"
                  }} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" id="delete" ><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                </button>}
              </Footer>
            </TweetContent>
          </TweetContainer>
        ))
      }

    </TwitterFeedContainer>
  );
};

export default TwitterApp;
