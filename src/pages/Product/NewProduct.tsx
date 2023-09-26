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
import TextArea from "antd/es/input/TextArea";
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
      <h2 className="font-bold m-4 text-2xl">Thêm sản phẩm</h2>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600, padding: 5 }}
      >
        <Form.Item label="Loại sản phẩm" className="rounded-3xl">
          <TreeSelect
            treeData={[
              {
                title: "Laptop",
                value: "laptop",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
              {
                title: "Điện thoại",
                value: "phone",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
              {
                title: "Tablet",
                value: "tablet",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="Tên sản phẩm">
          <Input name="name" />
        </Form.Item>
        {/* <Form.Item label="slug">
          <Input name="slug" />
        </Form.Item> */}
        <Form.Item label="Hãng sản xuất">
          <Input name="model" />
        </Form.Item>
        <Form.Item label="Giá sản phẩm">
          <Input name="price" />
        </Form.Item>
        <Form.Item label="Khuyến mãi">
          <Input name="sale" />
        </Form.Item>
        <Form.Item label="Mô tả">
          <TextArea rows={4} />
        </Form.Item>
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
