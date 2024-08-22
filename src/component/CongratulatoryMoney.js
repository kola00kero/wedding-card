import { ProfileTwoTone, HeartTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import {
  Button,
  Divider,
  Modal,
  Form,
  Input,
  Radio,
  Space,
  notification,
} from "antd";
import { useState, useCallback } from "react";
import qrimg from "../images/QRpay.JPG";

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
  fontSize: "2vh",
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


export default function CongratulatoryMoney() {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);
  const [form] = Form.useForm();
  const [api] = notification.useNotification();
  const onFinish = useCallback(
    async ({ nameandfamily, invitation, prepel }) => {
      try {
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSdAi38IHPI2rcr6Dmk0-m_-osV7nMt4bNXjNtnGr1PiwVh8_g/formResponse?" +
            new URLSearchParams({
              "entry.270008754": nameandfamily,
              "entry.532423227": invitation,
              "entry.733612501": prepel,
            }),
          {
            mode: "no-cors",
          }
        );
        api.success({
          message: "Submitted successfully"
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
        <Title>Join us in celebration</Title>
      </Divider>
      <ContactButton onClick={() => setGroomVisible(true)}>
        <ProfileTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#829fe0"
        />
        <br />
        <SubContent>รบกวนกรอกข้อมูล</SubContent>
      </ContactButton>
      <ContactButton onClick={() => setBrideVisible(true)}>
        <HeartTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#fe7daf"
        />
        <br />
        <SubContent>ร่วมแสดงความยินดี</SubContent>
      </ContactButton>
      <Modal
        title={<b>Welcom to our Beginning</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        <p>
          รบกวนกรอกข้อมูลใบแบบฟอร์มด้านล่างนี้ให้ครบถ้วย
          <br />
          เพื่อที่ทางเราจะได้นำไปจัดโซนที่นั่งโต๊ะอาหารให้กับทุกคน
        </p>
        <Form
          form={form}
          layout="vertical"
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="nameandfamily"
            label="ชื่อ"
            rules={[{ required: true, message: "กรุณากรอก ชื่อ" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="invitation"
            label="คุณสามารถมาร่วมงานแต่งเมย์และมะตูมได้ไหม"
            rules={[{ required: true, message: "กรุณาเลือก" }]}
          >
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="ได้">ได้</Radio>
                <Radio value="ไม่ได้">ไม่ได้</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="prepel"
            label="จำนวนคนที่จะมาร่วมงานด้วย"
            rules={[{ required: true, message: "กรุณากรอก จำนวนคน" }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
      <Modal
        title={<b>ร่วมแสดงความยินดี</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        <Image src={qrimg} />
      </Modal>
    </Wrapper>
  );
}
