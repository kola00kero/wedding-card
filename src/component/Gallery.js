import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const images = [
  {
    original: "./assets/0001_PUM20578.jpg",
    thumbnail: "./assets/0001_PUM20578.jpg",
  },
  {
    original: "./assets/0004_PUM20804.jpg",
    thumbnail: "./assets/0004_PUM20804.jpg",
  },
  {
    original: "./assets/0008_PUM11165.jpg",
    thumbnail: "./assets/0008_PUM11165.jpg",
  },
  {
    original: "./assets/0014_PUM21641.jpg",
    thumbnail: "./assets/0014_PUM21641.jpg",
  },
  {
    original: "./assets/0018_PUM12376.jpg",
    thumbnail: "./assets/0018_PUM12376.jpg",
  },
  {
    original: "./assets/0026_PUM13045.jpg",
    thumbnail: "./assets/0026_PUM13045.jpg",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Our beautiful moment</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
}
