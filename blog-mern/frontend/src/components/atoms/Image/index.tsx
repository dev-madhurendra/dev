import React from "react";

export interface MyImageProps {
    src: string;
    alt: string;
    styles?:React.CSSProperties;
}
  
const MyImage = (props: MyImageProps) => <img src={props.src} alt={props.alt} style={props.styles}/>

export default MyImage;