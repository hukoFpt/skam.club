type Props = {
  id: number;
  title: string;
  description: string;
};
export const SectionAccordion = ({ id, title, description }: Props) => {
  return (
    <section id={`section-${id}`} className="default-case-section w-full h-[120px]">
      <div className="border-t border-[#1e1b35] pt-11 relative">
        <div className="title-number large font-orbitron opacity-10">{String(id).padStart(2, "0")}</div>
        <div className="title-number small font-orbitron opacity-10">{String(id).padStart(2, "0")}</div>
        <div className="relative flex w-3/4 items-baseline pr-32 m-auto">
          <div className="text-2xl font-bold text-white mr-5 uppercase">{title}</div>
          <div className="text-[13px] text-[#70699b] uppercase">{description}</div>
        </div>
      </div>
      <div></div>
    </section>
  );
};
