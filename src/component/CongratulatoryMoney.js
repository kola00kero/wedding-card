import { CheckCircleTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, Modal, Form, Input, Radio, Space, notification } from "antd";
import { useState, useCallback } from "react";

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

const SubContent = styled("p", {
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const ContactButton = styled("div", {
  display: "inline-block",
  textAlign: "center",
  marginLeft: 24,
  marginRight: 24,
  marginBottom: 24,
});

const Image = styled("img", {
  backgroundColor: "#aeb8b3 !important",
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
});  

type CongratulatoryMoneyProps = {
  data?: Data;
  setOpen?: setOpen;
};

export default function CongratulatoryMoney({
  data, setOpen 
}: CongratulatoryMoneyProps) {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);
  const [form] = Form.useForm();
  const [api] = notification.useNotification();
  const onFinish = useCallback(
    async ({ nameandfamily, invitation, phone, prepel, room, roomcount}) => {
      try {
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSdAi38IHPI2rcr6Dmk0-m_-osV7nMt4bNXjNtnGr1PiwVh8_g/formResponse?" +
          new URLSearchParams({
            "entry.270008754": nameandfamily,
            "entry.532423227": invitation,
            "entry.2000365729": phone ="",
            "entry.733612501": prepel ="",
            "entry.872908016": room,
            "entry.2068189105": roomcount=""
          }),
          {
            mode: "no-cors",
          }
        );
        api.success({
          message: "Submitted successfully",
        });
        form.resetFields();
      } catch (e) {
        api.error({
          message: e.message,
        });
      }
    },
    [api, form]
  );

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>aaaaaaaa</Title>
      </Divider>
      <ContactButton onClick={() => setGroomVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#829fe0"
        />
        <br />
        <SubContent>신랑측 계좌번호 확인</SubContent>
      </ContactButton>
      <ContactButton onClick={() => setBrideVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#fe7daf"
        />
        <br />
        <SubContent>신부측 계좌번호 확인</SubContent>
      </ContactButton>
      <Modal
        title={<b>aaaaasdasds</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        <Form
        form={form}
        layout="vertical"
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="nameandfamily"
          label="nameandfamily"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="invitation"
            label="invitation"
            rules={[{ required: true, message: "invitation is required" }]}
        >
            <Radio.Group>
            <Space direction="vertical">
              <Radio value="ได้">ได้</Radio>
              <Radio value="ไม่ได้">ไม่ได้</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="phone"
          label="phone"
        >
          <Input />
          </Form.Item>
          <Form.Item
          name="prepel"
          label="prepel"
        >
          <Input />
          </Form.Item>
          <Form.Item
          name="room"
            label="room"
            rules={[{ required: true, message: "room is required" }]}
        >
            <Radio.Group>
            <Space direction="vertical">
              <Radio value="ใช่">ใช่</Radio>
              <Radio value="ไม่ใช่">ไม่ใช่</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
          <Form.Item
          name="roomcount"
          label="roomcount"
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Form>
      </Modal>
      <Modal
        title={<b>신부측 계좌번호</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        <Image src="./assets/images/QRpay.JPG" />
      </Modal>
    </Wrapper>
  );
}
