import { styled } from "@stitches/react";
import { Divider,Button } from "antd";
import { CarOutlined } from "@ant-design/icons";

const Wrapper = styled("div", {
  background: "#efebe9",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const GroomBride = styled("p", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.85,
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});

const LinkShareButton = styled(Button, {
  background: "#53acee",
  borderColor: "#53acee",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
  "&:focus": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
});

type LocationProps = {
  data?: Data;
};

export default function Location({ data }: LocationProps) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Location</Title>
      </Divider>
      <iframe
        title="Chateau de Bear hotel (โรงแรมหมีกอดหมอน)"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15361.904279940474!2d100.117669!3d15.725935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e04f8ed6d5fa71%3A0x68257fdb01b7db23!2sChateau%20De%20Bear%20Hotel!5e0!3m2!1sen!2sth!4v1722776767120!5m2!1sen!2sth"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <GroomBride>
        {data?.locationMap?.name}
        <br />
        {data?.locationMap?.address}
        <br />
        {data?.locationMap?.phone}
        <br />
      </GroomBride>
      <LinkShareButton
          style={{ margin: 8 }}
          icon={<CarOutlined />}
          size="large"
          onClick={event =>  window.location.href='https://maps.app.goo.gl/6g7tdSAP1RGLqLWEA'}
        >
          Direction
        </LinkShareButton>
    </Wrapper>
  );
}
