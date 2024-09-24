import { AiFillStar } from "react-icons/ai";
import { interests } from "../../mocks/Interests";
import { Button } from "../ui/button";
export const SideMenu = () => {
  return (
    <div className="mt-3 h-[70vh] w-[30vh]">
      <section>
        <section className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center w-20 h-20 p-2 rounded-full cursor-pointer">
            <img
              src={"https://avatars.githubusercontent.com/u/103892127?v=4"}
              alt="avatar"
              className=" rounded-full "
            />
          </div>
          <div className="flex flex-col  items-center justify-center">
            <div>Carlos Henrique</div>
            <div className="flex ">
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
              <AiFillStar className="text-amber-500" />
            </div>
            <div className="text-xs text-slate-400">Ver perfil</div>
            <Button
              variant={"secondary"}
              className="mt-2 pl-3 h-8 text-xs font-normal"
              hasLink={false}
              textButton="Convidar Amigos"
            >
              <img
                src={"/assets/icons/sendIcon.svg"}
                alt="send icon"
                className=" w-4 h-4 mr-2 "
              />
            </Button>
          </div>
        </section>
      </section>
      <hr className="my-5" />
      <section>
        <div className="my-4 text-slate-400">Categorias de interesse</div>
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {interests.map((interest) => (
            <div className="flex items-center h-3 p-4 text-sm bg-white rounded-xl border-[#5001A8] border-2">
              {interest.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
