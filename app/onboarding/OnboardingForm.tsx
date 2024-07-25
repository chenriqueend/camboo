"use client";

import InformInterests from "../../components/onboarding/InformInterests";
import InformLocation from "../../components/onboarding/InformLocation";
import WelcomeRegisterName from "../../components/onboarding/WelcomeRegisterName";
import { useOnboardData } from "../../store";
import React, { useCallback, useState } from "react";

export default function OnboardingForm({
  locationsEntries,
}: {
  locationsEntries?: any[];
}) {
  const [stepPosition, stepPositionSet] = useState(0);
  const [onboardingData, onboardingDataSet] = useOnboardData();
  const steppedPages = [
    (btnAction: () => void) => <WelcomeRegisterName btnAction={btnAction} />,
    (btnAction: () => void) => (
      <InformLocation
        btnAction={btnAction}
        locationsEntries={locationsEntries}
      />
    ),
    (btnAction: () => void) => <InformInterests btnAction={btnAction} />,
  ];

  const nextForm = useCallback(() => {
    if (stepPosition < steppedPages.length - 1) {
      stepPositionSet(stepPosition + 1);
    } else {
      stepPositionSet(0);
    }
  }, [stepPosition]);

  return (
    <div>
      {/* {JSON.stringify(onboardingData, null, 2)} */}
      <div>{steppedPages[stepPosition](nextForm)}</div>
    </div>
  );
}
