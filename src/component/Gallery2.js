import { Divider } from "antd";
import { styled } from "@stitches/react";
import { ImageGallery } from "react-image-grid-gallery";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/images/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const imagesArray  = [
  {
    src: "./assets/images/0001_PUM20578.jpg",
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 3
  },
  {
    src: "./assets/images/0004_PUM20804.jpg",
  },
  {
    src: "./assets/images/0007_PUM10844.jpg",
  },
  {
    src: "./assets/images/0008_PUM11165.jpg",
  },
  {
    src: "./assets/images/0011_PUM11580.jpg",
  },
  {
    src: "./assets/images/0014_PUM21641.jpg",
  },
  {
    src: "./assets/images/0018_PUM12376.jpg",
  },
  {
    src: "./assets/images/0026_PUM13045.jpg",
  },
  {
    src: "./assets/images/0028_PUM13245.jpg",
  },

];

export default function Gallery2() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Our beautiful moment</Title>
      </Divider>
      <ImageGallery
      imagesInfoArray={imagesArray}
      columnCount={"auto"}
      columnWidth={230}
      gapSize={24}
    />
    </Wrapper>
  );
}
