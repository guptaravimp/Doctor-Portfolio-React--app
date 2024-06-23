import Doctorinfo from "./Doctorinfo";
import ellipsepicc from "../assets/Ellipse 372 (1).svg";
import Rxtable1 from "./Rxtable1";
import Rxtable2 from "./Rxtable2";
function Firstmainpart() {
  return (
    <div class=" border bg-white rounded-[10px] w-[1170px] h-[600px] my-2 flex flex-col justify-evenly items-center">
      <Doctorinfo ellipsepicc={ellipsepicc} />
      <div class="my-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1130"
          height="7"
          viewBox="0 0 1130 7"
          fill="none"
        >
          <line
            x1="0.00800038"
            y1="0.750003"
            x2="1129.99"
            y2="6.28915"
            stroke="#A6CC39"
            stroke-width="0.5"
          />
        </svg>
      </div>
      <Rxtable1 />
      <Rxtable2 />
    </div>
  );
}
export default Firstmainpart;
