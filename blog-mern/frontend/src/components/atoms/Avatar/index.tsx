import React from "react";
import { Avatar, AvatarProps } from "@mui/material";


const MyAvatar: React.FC<AvatarProps> = (props) => {
  return <Avatar {...props} />;
};

export default MyAvatar;