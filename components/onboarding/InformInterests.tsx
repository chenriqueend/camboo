"use client";
import React, { useCallback, useState } from "react";
import { Button } from "../ui/button";
import GradientBox from "../shared/GradientBox";

type PropsType = {
  btnAction?: () => void;
};
const _interests = [
  {
    name: "Artes",
    checked: false,
  },
  {
    name: "Cinema",
    checked: false,
  },
  {
    name: "Culinária",
    checked: true,
  },
  {
    name: "Esportes",
    checked: false,
  },
  {
    name: "Fotografia",
    checked: false,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Games",
    checked: true,
  },
  {
    name: "Artes",
    checked: false,
  },
  {
    name: "Artes",
    checked: false,
  },
];
export default function InformInterests(props: PropsType) {
  const [interests, interestsSet] = useState(_interests);
  const btnAction = useCallback(() => {
    props.btnAction && props.btnAction();
  }, [props]);

  return (
    <GradientBox className="w-[50vw]">
      <div className="flex flex-col items-center justify-center gap-3 p-4">
        <h2 className="text-xl">Quais seus Interesses?</h2>

        <h3 className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, et.
        </h3>

        <div className="flex flex-wrap gap-3">
          {interests.map((interest, idx) => (
            <span
              key={idx}
              className={`p-1 px-3 select-none text-sm border cursor-pointer ${
                interest.checked ? "rounded-xl bg-gray-300" : "rounded-lg"
              }`}
              onClick={() => {
                const found = interests[idx];
                if (found) {
                  found.checked = !found.checked;
                  interests[idx] = found;
                  interestsSet([...interests]);
                }
              }}
            >
              <span>{interest.name}</span>
            </span>
          ))}
        </div>

        <Button className="w-full mt-4" onClick={btnAction}>
          Continuar
        </Button>
      </div>
    </GradientBox>
  );
}
