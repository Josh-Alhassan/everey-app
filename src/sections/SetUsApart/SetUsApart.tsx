import React from "react";
import setusApartStyles from "./SetUsApart.module.css";
import SecondaryHeader from "@/utils/SecondaryHeader/SecondaryHeader";

import { setUsApart } from "@/utils/constants";
import { ReasonCard } from "@/component/ChooseUs";

const SetUsApart = () => {
  return (
    <section className={setusApartStyles.container}>
      <SecondaryHeader title="What Sets Us Apart" />
      <div className={setusApartStyles.cards}>
        {setUsApart.map((card, index) => (
          <ReasonCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default SetUsApart;
