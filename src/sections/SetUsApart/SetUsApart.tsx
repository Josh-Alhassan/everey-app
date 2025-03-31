import React from "react";
import setusApartStyles from "./SetUsApart.module.css";
import SecondaryHeader from "@/utils/SecondaryHeader/SecondaryHeader";

import { setUsApart } from "@/utils/constants";
import { ReasonCard } from "@/component/ChooseUs";

/**
 * SetUsApart Component
 *
 * @component
 * @description
 * A feature showcase section highlighting unique value propositions that differentiate
 * the platform from competitors. Displays a grid of reason cards with icons and descriptions.
 *
 * @example
 * // Basic usage
 * <SetUsApart />
 *
 * @structure
 * 1. Section Header:
 *    - "What Sets Us Apart" title (via SecondaryHeader)
 * 2. Cards Grid:
 *    - Multiple ReasonCard components displaying:
 *      - Icon
 *      - Title
 *      - Description
 *
 * @data
 * - Uses `setUsApart` array from constants containing:
 *   - Icon
 *   - Title
 *   - Description
 *   - For each unique selling point
 *
 * @styles {module} setusApartStyles - CSS Module classes:
 * - `.container` - Main section container
 * - `.cards` - Grid container for ReasonCards
 *
 * @accessibility
 * - Semantic section element
 * - Proper heading hierarchy
 * - Screen reader friendly content
 * - Keyboard navigable cards
 *
 * @performance
 * - Efficient rendering of ReasonCards
 * - Optimized layout
 * - Lightweight parent component
 *
 * @dependencies
 * - SecondaryHeader for consistent section headers
 * - ReasonCard for individual feature cards
 * - setUsApart data from constants
 */

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
