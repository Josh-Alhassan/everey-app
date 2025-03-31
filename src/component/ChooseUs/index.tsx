/**
 * Marketing Components Module
 *
 * @module MarketingComponents
 * @description
 * A collection of reusable marketing components that work together to create
 * persuasive content sections. These components are typically used for:
 * - Value proposition displays
 * - Benefit highlighting
 * - Conversion-focused sections
 *
 * @components
 * - `ArrowIcon`: Decorative arrow icon component
 *   - Used as visual accent in headings
 *   - Pure presentational component
 *   - @see {@link ArrowIcon} for implementation details
 *
 * - `ReasonCard`: Individual benefit/feature card
 *   - Displays an icon, title and description
 *   - Used in grid layouts
 *   - @see {@link ReasonCard} for props and usage
 *
 * - `ChooseUs`: Composite marketing section
 *   - Combines ArrowIcon and multiple ReasonCards
 *   - Includes gradient background and CTA
 *   - @see {@link ChooseUs} for full documentation
 *
 * @typicalusage
 * import { ChooseUs, ReasonCard, ArrowIcon } from '@/components/marketing';
 *
 * // Use the composite component
 * <ChooseUs />
 *
 * // Or use individual components
 * <ReasonCard icon={<StarIcon />} title="Quality" description="Our premium service"/>
 * <ArrowIcon />
 *
 * @architecture
 * - Components designed to work together but can be used independently
 * - Follows atomic design principles (atoms → molecules → organisms)
 * - Consistent styling through shared CSS variables
 *
 * @dependencies
 * - Next.js Image optimization
 * - Shared design tokens (colors, spacing)
 * - PropTypes or TypeScript interfaces
 */

export { default as ArrowIcon } from "./ArrowIcon";
export { default as ReasonCard } from "./ReasonCard";
export { default as ChooseUs } from "./ChooseUs";
