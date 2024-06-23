// import Items from "./Items.jsx";
import image1 from "../assets/clock 1.svg";
import image2 from "../assets/clock 1 (1).svg";
import image3 from "../assets/clock 1 (2).svg";
import image4 from "../assets/clock 1 (3).svg";
import image5 from "../assets/clock 1 (4).svg";
import image6 from "../assets/clock 1 (5).svg";
import image7 from "../assets/clock 1 (6).svg";
function Groucerylistitem() {
  return (
    <div className="h-[474px] w-[790px] flex flex-col justify-center items-center ">
      <div className="h-[59.2px] w-[790px] border-2 my-1  bg-[#EEFFF5] rounded-[5px] flex justify-between items-center ">
        <div className="mx-[10px]  h-[36px] w-[95px] flex justify-between items-center ">
          <div className="w-[35px] h-[35px]">
            <img src={image1} alt="" />
          </div>
          <div className="font-[700] text-[18px] w-[52px] h-[24px]">
            <h2>Fruits:</h2>
          </div>
        </div>
        <div className="mx-[20px] text-[18px]  h-[36px]">
          <h2>1000 grams</h2>
        </div>
      </div>
      <div className="h-[59.2px] w-[790px] border-2 my-1  bg-[#EEFFF5] rounded-[5px] flex justify-between items-center ">
        <div className="mx-[10px]  h-[36px] w-[95px] flex justify-between items-center ">
          <div className="w-[35px] h-[35px]">
            <img src={image2} alt="" />
          </div>
          <div className="font-[700] text-[18px]  w-[52px] h-[24px]">
            <h2>Vegetables:</h2>
          </div>
        </div>
        <div className="mx-[20px] text-[18px]  h-[36px]">
          <h2>500 Grams</h2>
        </div>
      </div>
      <div className="h-[59.2px] w-[790px] border-2 my-1  bg-[#EEFFF5] rounded-[5px] flex justify-between items-center ">
        <div className="mx-[10px]  h-[36px] w-[95px] flex justify-between items-center ">
          <div className="w-[35px] h-[35px]">
            <img src={image3} alt="" />
          </div>
          <div className="font-[700] text-[18px]  w-[52px] h-[24px]">
            <h2>Millets:</h2>
          </div>
        </div>
        <div className="mx-[20px] text-[18px]  h-[36px]">
          <h2>As Needed</h2>
        </div>
      </div>
      <div className="h-[59.2px] w-[790px] border-2 my-1  bg-[#EEFFF5] rounded-[5px] flex justify-between items-center ">
        <div className="mx-[10px]  h-[36px] w-[180px] flex justify-between items-center ">
          <div className="w-[35px] h-[35px]">
            <img src={image4} alt="" />
          </div>
          <div className="font-[700] text-[18px]   h-[24px]">
            <h2>Coconut Water:</h2>
          </div>
        </div>
        <div className="mx-[20px] text-[18px]  h-[36px]">
          <h2>As Needed</h2>
        </div>
      </div>
      <div className="h-[59.2px] w-[790px] border-2 my-1  bg-[#EEFFF5] rounded-[5px] flex justify-between items-center ">
        <div className="mx-[10px]  h-[36px] w-[230px] flex justify-between items-center ">
          <div className="w-[35px] h-[35px]">
            <img src={image5} alt="" />
          </div>
          <div className="font-[700] text-[18px]   h-[24px]">
            <h2>Spouts/Green Leaves:</h2>
          </div>
        </div>
        <div className="mx-[20px] text-[18px]  h-[36px]">
          <h2>100 Grams</h2>
        </div>
      </div>
      <div className="h-[59.2px] w-[790px] border-2 my-1  bg-[#EEFFF5] rounded-[5px] flex justify-between items-center ">
        <div className="mx-[10px]  h-[36px] w-[145px] flex justify-between items-center ">
          <div className="w-[35px] h-[35px]">
            <img src={image6} alt="" />
          </div>
          <div className="font-[700] text-[18px]   h-[24px]">
            <h2>Dry Fruits:</h2>
          </div>
        </div>
        <div className="mx-[20px] text-[18px]  h-[36px]">
          <h2>100 Grams</h2>
        </div>
      </div>
      <div className="h-[59.2px] w-[790px] border-2 my-1  bg-[#EEFFF5] rounded-[5px] flex justify-between items-center ">
        <div className="mx-[10px]  h-[36px] w-[145px] flex justify-between items-center ">
          <div className="w-[35px] h-[35px]">
            <img src={image7} alt="" />
          </div>
          <div className="font-[700] text-[18px]   h-[24px]">
            <h2>Hunza Tea:</h2>
          </div>
        </div>
        <div className="mx-[20px] text-[18px]  h-[36px]">
          <h2>As Needed</h2>
        </div>
      </div>
    </div>
  );
}
export default Groucerylistitem;
