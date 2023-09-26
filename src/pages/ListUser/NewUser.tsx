import { PlusOutlined } from "@ant-design/icons";

import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { useState } from "react";
import Input from "src/components/Input";

const { RangePicker } = DatePicker;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormDisabledDemo: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

  return (
    <div className="bg-white shadow ">
      <h2 className="font-bold m-4 text-2xl">Thêm người dùng</h2>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600, padding: 5 }}
      >
        <Form.Item label="Giới tính">
          <Radio.Group>
            <Radio value="apple"> Nam </Radio>
            <Radio value="pear"> Nữ </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Họ Tên">
          <Input name="" />
        </Form.Item>
        <Form.Item label="Địa chỉ">
          <Input name="" />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input name="" />
        </Form.Item>
        {/* <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
            ]}
          />
        </Form.Item> */}
        {/* <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item> */}
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="" className="ml-[100px] mb-2">
          <Button className="w-[100px]">Lưu</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default () => <FormDisabledDemo />;
