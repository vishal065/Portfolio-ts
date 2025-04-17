import "./Loading.css";
function Loading() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-neutral-900">
      <div id="page">
        <div id="container">
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="h3">loading</div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
