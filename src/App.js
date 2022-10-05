import { Button } from "antd";
import "./styles/main.less";

function App() {
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

  return (
    <div className="App">
      <Button type="primary" onClick={changeMe}>
        click me{" "}
      </Button>
      <Button type="primary" onClick={reset}>
        reset
      </Button>
    </div>
  );
}

export default App;
