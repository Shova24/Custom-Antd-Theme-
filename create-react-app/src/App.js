import React, { Component, useState } from "react";
import {
  Row,
  Col,
  Icon,
  Breadcrumb,
  Menu,
  Layout,
  Form,
  Select,
  Switch,
  Radio,
  Card,
  message,
  Button,
  Upload,
  DatePicker,
  Progress,
  Dropdown,
  Pagination,
  Checkbox,
  Badge,
  List,
  Avatar,
} from "antd";

import { SketchPicker } from "react-color";
import "./styles/main.less";

class App extends Component {
  render() {
    const reset = () => {
      localStorage.setItem("app-theme", "{}");
      this.setState({ vars: this.state.initialValue });
      window.less.modifyVars(this.state.initialValue).catch((error) => {
        message.error(`Failed to reset theme`);
      });
    };

    const changeMe = () => {
      const vars = {
        "@btn-primary-bg": "red",
        "@heading-color": "red",
        "@layout-header-background": "red",
        "@primary-color": "red",
        "@secondary-color": "red",
        "@text-color": "red",
        "@text-color-secondary": "red",
      };

      window.less
        .modifyVars(vars)
        .then(() => {
          message.success(`Theme updated successfully`);
        })
        .catch((error) => {
          message.error(`Failed to update theme`);
        });
    };
    const [color, setColor] = useState("teal");
    return (
      <div className="App">
        <Row>
          <Col>
            <SketchPicker
              color={color}
              // onChange={(updatedColor) => console.log(updatedColor.hex)}
              onChange={(updatedColor) => setColor(updatedColor.hex)}
            />
          </Col>
          <Col>
            <Button type="primary">Primary Button</Button>
          </Col>
          <Col>
            <Button style={{ backgroundColor: color }}>Primary Button</Button>
          </Col>
        </Row>

        <Button type="primary" onClick={changeMe}>
          click me{" "}
        </Button>
        <Button type="primary" onClick={reset}>
          reset
        </Button>
      </div>
    );
  }
}

App = Form.create()(App);
export default App;
