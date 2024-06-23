import movevert from "../assets/more_vert (1).svg";
// C:\Users\gupta\Desktop\reactapphealthcare\reacthealthapp\src\assets\more_vert (1).svg
const Doctorinfo = ({ ellipsepicc }) => {
  return (
    <div class="  w-[1130px] h-[50px] flex justify-between items-center my-3 ">
      <div class="  w-64 h-12 flex justify-between items-center   ">
        <div class="h-12 w-12">
          <img src={ellipsepicc} alt="" />
        </div>
        <div class="w-60 h-12  mx-3">
          <h2 class="font-extrabold">Dr. Darlene Robertson</h2>
          <p>Nutritionist</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p class="text-[#A6CC39]">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <img src={movevert} alt="" />
        </div>
      </div>
      {/* <div class="  w-2/4 flex justify-between gap-10 ">
        <div class="flex justify-center items-center text-base	">
          <p class="text-sky-400/100">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div class="mx-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <mask
              id="mask0_1_257"
              style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="40"
              height="40"
            >
              <rect width="40" height="40" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_257)">
              <path
                d="M20 33.3334C19.0834 33.3334 18.2986 33.007 17.6459 32.3542C16.9931 31.7014 16.6667 30.9167 16.6667 30C16.6667 29.0834 16.9931 28.2986 17.6459 27.6459C18.2986 26.9931 19.0834 26.6667 20 26.6667C20.9167 26.6667 21.7014 26.9931 22.3542 27.6459C23.007 28.2986 23.3334 29.0834 23.3334 30C23.3334 30.9167 23.007 31.7014 22.3542 32.3542C21.7014 33.007 20.9167 33.3334 20 33.3334ZM20 23.3334C19.0834 23.3334 18.2986 23.007 17.6459 22.3542C16.9931 21.7014 16.6667 20.9167 16.6667 20C16.6667 19.0834 16.9931 18.2986 17.6459 17.6459C18.2986 16.9931 19.0834 16.6667 20 16.6667C20.9167 16.6667 21.7014 16.9931 22.3542 17.6459C23.007 18.2986 23.3334 19.0834 23.3334 20C23.3334 20.9167 23.007 21.7014 22.3542 22.3542C21.7014 23.007 20.9167 23.3334 20 23.3334ZM20 13.3334C19.0834 13.3334 18.2986 13.007 17.6459 12.3542C16.9931 11.7014 16.6667 10.9167 16.6667 10C16.6667 9.08335 16.9931 8.29863 17.6459 7.64585C18.2986 6.99308 19.0834 6.66669 20 6.66669C20.9167 6.66669 21.7014 6.99308 22.3542 7.64585C23.007 8.29863 23.3334 9.08335 23.3334 10C23.3334 10.9167 23.007 11.7014 22.3542 12.3542C21.7014 13.007 20.9167 13.3334 20 13.3334Z"
                fill="#444444"
              />
            </g>
          </svg>
        </div>*/}
    </div>
  );
};
export default Doctorinfo;
