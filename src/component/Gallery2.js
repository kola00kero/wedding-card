
import { Divider } from "antd";
import { styled } from "@stitches/react";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  paddingBottom: 18,
  width: "100%",
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

export const slides = [
  { asset: require('../images/pic1.jpg'), width: 5464, height: 8192 },
  { asset: require('../images/pic2.jpg'), width: 2576, height: 1932 },
  { asset: require('../images/pic3.jpg'), width: 5464, height: 8192 },
  { asset: require('../images/pic4.jpg'), width: 5464, height: 8192 },
  { asset: require('../images/pic5.jpg'), width: 8192, height: 5464 },
  { asset: require('../images/pic6.jpg'), width: 8192, height: 5464 },
  { asset: require('../images/pic7.jpg'), width: 3614, height: 5418 },
  { asset: require('../images/pic8.jpg'), width: 3609, height: 5411 },
].map(({ asset, width, height }) => ({
  src: asset,
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: asset,
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

export default function Gallery2() {
  const [index, setIndex] = React.useState(-1);
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Our beautiful moment</Title>
      </Divider>

      <RowsPhotoAlbum
        photos={slides}
        targetRowHeight={300}
        rowConstraints={{ singleRowMaxHeight: 1200 }}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />

    </Wrapper>
  );
}

