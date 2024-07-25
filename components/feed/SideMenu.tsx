import { LiaUserAltSolid } from "react-icons/lia";
import { AiFillStar } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuFerrisWheel } from "react-icons/lu";
import { BsPerson, BsBookmark } from "react-icons/bs";
export const SideMenu = () => {
  return (
    <div className="mt-3 h-[80vh]">
      <section>
        <section className="flex ">
          <div className="flex items-center justify-center w-20 h-20 p-2 rounded-full cursor-pointer">
            <img
              src={"https://avatars.githubusercontent.com/u/103892127?v=4"}
              alt="avatar"
              className=" rounded-full mr-4"
            />
          </div>
          <div className="mt-2">
            <div>Carlos Henrique</div>
            <div className="flex">
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
            </div>
            <div className="text-xs text-slate-400">Ver perfil</div>
          </div>
        </section>
      </section>
      <hr className="my-5" />
      <section>
        <div className="my-4 text-slate-400">Seus Interesses</div>
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          <div className="flex items-center h-3 p-4 text-sm bg-blue-200 rounded-lg">
            Tag
          </div>
          <div className="flex items-center h-3 p-4 text-sm bg-blue-200 rounded-lg">
            Tag
          </div>
          <div className="flex items-center h-3 p-4 text-sm bg-blue-200 rounded-lg">
            Tag
          </div>
          <div className="flex items-center h-3 p-4 text-sm bg-blue-200 rounded-lg">
            Tag
          </div>
          <div className="flex items-center h-3 p-4 text-sm bg-blue-200 rounded-lg">
            Tag
          </div>
        </div>
      </section>
    </div>
  );
};
