import React from "react";
import { styled } from "@stitches/react";

const Layout = styled("div", {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    margin: "0px auto",
    position: "relative",
});
  
const Image = styled("img", {
    backgroundColor: "#aeb8b3 !important",
    opacity: 0.9,
    objectFit: "cover",
    objectPosition: "center center",
    width: "100%",
    height: "100%",
    minHeight: 480,
});  

export default function Schedule() {
    return (
      <Layout>
        <Image src="./assets/Schedule.png" />
      </Layout>
    );
  }