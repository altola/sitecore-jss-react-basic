import React from "react";
import { trackingApi } from "@sitecore-jss/sitecore-jss-tracking";

import StepZilla from "react-stepzilla";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import config from "../../temp/config";
import { dataFetcher } from '../../dataFetcher';

const trackingApiOptions = {
  host: config.sitecoreApiHost,
  fetcher: dataFetcher,
  querystringParams: {
    sc_apikey: config.sitecoreApiKey
  }
};

const steps = [
  { name: "Step 1", component: <Step1 /> },
  { name: "Step 2", component: <Step2 /> },
  { name: "Step 3", component: <Step3 /> }
];

const QuoteWizard = props => {
  return (
    <div className="step-progress">
      <StepZilla
        steps={steps}
        onStepChange={step =>
          trackingApi
            .trackEvent([{ eventId: "{0A3E0951-B4E6-4F18-A4BA-7FCBA3973D3F}" }], trackingApiOptions)
            .then(() => console.log("Page event pushed"))
            .catch(error => console.error(error))
        }
      />
    </div>
  );
};

export default QuoteWizard;
