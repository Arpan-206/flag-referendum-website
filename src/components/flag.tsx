/* eslint-disable @next/next/no-img-element */
type FlagProps = {
  img: string;
};

export default function Flag(props: FlagProps) {
  return (
    <div className="m-3 rounded-xl border-4 border-emerald-500 bg-emerald-400 p-3 [box-shadow:5px_5px_4px_0px_rgba(0,207,146,0.75)]">
      <img src={props.img} alt="Flag" />
      {/* <!---TODO: show slider if signed in and send slider data --> */}
    </div>
  );
}
