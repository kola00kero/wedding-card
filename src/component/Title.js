import React from "react";
import { styled } from "@stitches/react";
import imgTitle from "../images/Title.jpg";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  textShadow: "-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",
  animation: "fadein 3s",
  "-moz-animation": "fadein 3s" /* Firefox */,
  "-webkit-animation": "fadein 3s" /* Safari and Chrome */,
  "-o-animation": "fadein 3s" /* Opera */,
});

const WeddingInvitation = styled("p", {
  fontSize: "2.5vh",
  marginBottom: 16,
});

const GroomBride = styled("p", {
  fontFamily: "Amsterdam Four_ttf",
  fontSize: "6vh",
  opacity: 0.9,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: "2vh",
  opacity: 0.65,
  marginBottom: 24,
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

type TitleProps = {
  data?: Data,
};

export default function Title({ data }: TitleProps) {
  return (
    <Layout>

      <Image src={imgTitle} />
      <TitleWrapper>
        <WeddingInvitation>{data?.weddinginvitation}</WeddingInvitation>
        <Schedule>
          {data?.date}
        </Schedule>
        <GroomBride>
        {data?.bride?.name} &#38; {data?.groom?.name} 
        </GroomBride>
        <Schedule>
          {data?.location}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
}
