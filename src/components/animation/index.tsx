import "./index.scss";

export function SlideCube() {
  return (
    <div className={"overflow-hidden"}>
      <div className={"slide-cue-item"} />
      <div className={"slide-cue-item"} />
    </div>
  );
}

export function LoadingCircle() {
  return (
    <div className={"flex h-[100px]"}>
      <div className={"relative flex-1"}>
        <div className={"absolute top-0 left-0 circle-item"} />
        <div className={"absolute top-0 left-0 circle-item"} />
        <div className={"absolute top-0 left-0 circle-item"} />
      </div>
      <div className={"flex-1"}>
        <div className={"circle-item"} />
        <div className={"circle-item"} />
        <div className={"circle-item"} />
      </div>
    </div>
  );
}

export function ChargingAnimate() {
  const liSet = new Array(20).fill(1).map((e, i) => <li key={i} />);
  return <ul className={"chargeAnimate"}>{liSet}</ul>;
}
