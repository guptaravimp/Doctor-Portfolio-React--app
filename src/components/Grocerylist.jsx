// import grocerylistfirst from "./Grocerylistfirst";
// import moduleName from 'module'
import Grocerylistfirst from "./Grocerylistfirst";
import Grocerylistsecondbox from "./Grocerylistsecondbox";
function Grocerylist() {
  return (
    <div className="w-[1170px] h-[650px]  flex flex-col justify-evenly items-center my-5 bg-[#F7FDED]">
      <Grocerylistfirst></Grocerylistfirst>
      <Grocerylistsecondbox></Grocerylistsecondbox>
      <div className="border-2 bg-[#A6CC39] h-[53px] w-[148px] rounded-[5px] flex justify-center items-center text-[18px] text-[#FFFFFF] my-6">
        <button>Buy Now</button>
      </div>
    </div>
  );
}
export default Grocerylist;
