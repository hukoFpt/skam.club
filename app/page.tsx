import EventBanner from "@/components/molecules/Home/EventBanner.component";
import MainPageFilter from "@/components/molecules/Home/MainPageFilter.component";

import { SectionAccordion } from "@/components/molecules/Home/Sections/SectionsAccordion.component";

import { Section, SECTIONS_DATA } from "@/constants/sections.constant";

const renderSection = (section: Section) => {
  return (
    <SectionAccordion
      key={section.id}
      id={parseInt(section.id)}
      title={section.label}
      description={section.description}
      type={section.type}
    />
  );
};

export default function HomePage() {
  return (
    <main className="home-page">
      <EventBanner />
      <MainPageFilter />
      <section className="sections-container">
        {SECTIONS_DATA.map(renderSection)}
      </section>
    </main>
  );
}