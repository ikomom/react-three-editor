import ThreeCompare from "./components/threejs";
import "./App.css";
import { ChargingAnimate } from "./components/animation";

export default function App() {
  return (
    <div className={"container m-auto"} style={{ height: "100vh" }}>
      <p className={"text-center font-bold color-change"}>学习threejs</p>
      <ThreeCompare />
      {/*<SlideCube />*/}
      {/*<LoadingCircle />*/}
      <ChargingAnimate />
    </div>
  );
}
