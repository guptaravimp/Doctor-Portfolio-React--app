function Grocerylistfirst() {
  return (
    <div className=" w-[1170px] h-[40px] flex justify-center items-center">
      <div className="flex justify-evenly items-center">
        <div>
          <h1 className="font-[700] text-[#222222]">HEALTHY GROCERY LIST</h1>
        </div>
        <div className="h-[40px] w-[103] ">
          <form class="h-[40px] w-[103] mx-2 rounded-[5px] flex justify-center items-center bg-white">
            <select id="countries">
              <option selected> daily</option>
              <option value="US">weekly</option>
              <option value="CA">monthly</option>
              <option value="FR">daily*7=weekly</option>
              <option value="DE">weekly*4=montly</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Grocerylistfirst;
