import Groucerylistitem from "./Groucerylistitem";
import Groucerylistitemimage from "./Groucerylistitemimage";
function Grocerylistsecondbox() {
  return (
    <div className="w-[1170px] h-[474px]  my-2 flex justify-between items-center ">
      <Groucerylistitem></Groucerylistitem>
      <Groucerylistitemimage></Groucerylistitemimage>
    </div>
  );
}
export default Grocerylistsecondbox;
