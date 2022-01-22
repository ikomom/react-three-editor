import ThreeCompare from "./components/threejs";
import "./App.css";

export default function App() {
  return (
    <div className={"container m-auto"} style={{ height: "100vh" }}>
      <p className={"text-center font-bold"}>学习threejs</p>
      <ThreeCompare />
    </div>
  );
}
