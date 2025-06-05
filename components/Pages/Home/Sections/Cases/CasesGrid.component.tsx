import styles from "@/styles/pages/home.module.css";

import { CaseCard } from "./CaseCard.component";

import type { Case } from "@/types/section-case.type";

interface Props {
  cases: Case[];
  sectionId: string;
  onCaseClick?: (caseId: string) => void;
}

export const CasesGrid = ({ cases, onCaseClick }: Props) => {
  if (!cases || cases.length === 0) {
    return (
      <div className={styles.emptyCases}>
        <p>No cases available for this section</p>
      </div>
    );
  }

  return (
    <div className={`w-[1384px] flex flex-wrap items-center justify-center pt-[40px] mx-auto`}>
      {cases.map((caseData) => (
        <CaseCard 
          key={caseData.id} 
          case={caseData} 
          onClick={onCaseClick}
        />
      ))}
    </div>
  );
};