import React from "react";
import OnboardingForm from "./OnboardingForm";

import { getSupabaseServerClient } from "@/utils/supabase/server";
import { uniqBy } from "lodash";
import { getCitiesBrazilByStateFactory } from "@/db/queries/cities-brazil.query";

export default async function OnBoardingPage() {
  const { getCitiesBrazil } = getCitiesBrazilByStateFactory(
    getSupabaseServerClient(),
  );
  const citesBrazil = await getCitiesBrazil();

  return (
    <div className="mt-[150px] flex flex-col items-center">
      <OnboardingForm
        locationsEntries={uniqBy(citesBrazil.data, "city_name")?.map((e) => {
          return {
            label: e.city_name + " - " + e.state_short,
            value: e.city_name + " - " + e.state_short,
          };
        })}
      />
    </div>
  );
}
