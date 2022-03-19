import ThreeCompare from "./components/threejs";
import "./App.css";
import {
  ChargingAnimate,
  LoadingCircle,
  SlideCube,
} from "./components/animation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Amis from "./views/amis";

function Animate() {
  return (
    <div className={"container m-auto"} style={{ height: "100vh" }}>
      <p className={"text-center font-bold color-change"}>学习threejs</p>
      <ThreeCompare />
      <SlideCube />
      <LoadingCircle />
      <ChargingAnimate />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Animate />}></Route>
        <Route path={"/amis"} element={<Amis />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
