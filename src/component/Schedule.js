import React from "react";
import { styled } from "@stitches/react";
import imgSchedule from "../images/Schedule.png";

const Layout = styled("div", {
    width: "100%",
    height: "80vh",
    overflow: "hidden",
    margin: "0px auto",
    position: "relative",
});
  
const Image = styled("img", {
    backgroundColor: "#aeb8b3 !important",
    objectFit: "cover",
    objectPosition: "center center",
    width: "100%",
    height: "100%",
});  

export default function Schedule() {
    return (
      <Layout>
        <Image src={imgSchedule} />
      </Layout>
    );
  }