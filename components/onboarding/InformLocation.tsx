import React, { useCallback, useState } from "react";
import { Button } from "../ui/button";
import GradientBox from "@/components/shared/GradientBox";
import { uniqBy } from "lodash";
import { getSupabaseClientSideClient } from "@/utils/supabase/client";
import { getCitiesBrazilByStateFactory } from "@/db/queries/cities-brazil.query";
import { useOnboardData } from "@/store";
import ComboBox from "../ui/ComboBox";

type PropsType = {
  btnAction?: () => void;
  locationsEntries?: any[];
};

export default function InformLocation(props: PropsType) {
  const [citiesByState, setcitiesByState] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);

  const [onboardingData, onboardingDataSet] = useOnboardData();

  const fetchCitiesByStateShort = useCallback(async (state_short: string) => {
    const supabase = getSupabaseClientSideClient();

    const { getCitiesBrazilByState } = getCitiesBrazilByStateFactory(supabase);
    const results = await getCitiesBrazilByState(state_short.toUpperCase());
    // console.log("results", results, state_short);

    if (!results.data) return [];
    const cities = uniqBy(results.data, "city_name")?.map((e) => {
      return {
        label: e.city_name + " - " + e.state_short,
        value: e.city_name + " - " + e.state_short,
      };
    });
    return cities;
  }, []);

  const onStateComboChange = useCallback(async (value: string) => {
    onboardingDataSet((prev) => {
      prev.location.state = value;
      return {
        ...prev,
      };
    });

    const retCitiesByState = await fetchCitiesByStateShort(value);
    // console.log("citiesByState", retCitiesByState);

    setcitiesByState(retCitiesByState);
  }, []);

  const onCityComboChange = useCallback((value: string) => {
    onboardingDataSet((prev) => {
      prev.location.city = value;
      return {
        ...prev,
      };
    });
  }, []);

  const btnAction = useCallback(() => {
    props.btnAction && props.btnAction();
  }, [props]);

  return (
    <GradientBox className="w-[50vw]">
      {/* <div className="flex flex-col items-center justify-center border w-[50vw] rounded-2xl p-4 gap-3 h-[300px]"> */}
      <div className="flex flex-col items-center justify-center gap-3 p-4">
        <h2 className="text-xl">Qual sua localização?</h2>

        <h3 className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, et.
        </h3>

        {/* <Input className="mt-7" type="text" placeholder="Recife" /> */}
        <div className="flex gap-4">
          <ComboBox
            entries={
              (props.locationsEntries &&
                uniqBy(
                  props.locationsEntries.map((e) => {
                    return {
                      label: e.label.split(" - ")[1].trim(),
                      value: e.label.split(" - ")[1].trim(),
                    };
                  }),
                  "label"
                )) ||
              []
            }
            onSelect={onStateComboChange}
            placeholderLabel="Estado"
            className="w-[200px]"
          />

          <ComboBox
            defaultValue={onboardingData?.location.state}
            disabled={onboardingData?.location.state === ""}
            entries={citiesByState || []}
            placeholderLabel="Cidade"
            className="w-[300px]"
            onSelect={onCityComboChange}
          />
        </div>

        <Button className="w-full mt-4" onClick={btnAction}>
          Continuar
        </Button>
      </div>
    </GradientBox>
  );
}
