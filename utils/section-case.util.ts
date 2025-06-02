import casesData from "@/data/section-cases.json";
import { SECTION_CASE_MAPPING } from "@/constants/section-cases.constant";
import { Case } from "@/types/section-case.type";

export const getCasesBySection = (sectionId: string): Case[] => {
  const caseIds = SECTION_CASE_MAPPING[sectionId];
  
  if (!caseIds) {
    console.warn(`No cases found for section: ${sectionId}`);
    return [];
  }

  return casesData.filter(caseItem => 
    caseIds.includes(caseItem.id)
  ) as Case[];
};

export const getAllCases = (): Case[] => {
  return casesData as Case[];
};

export const getCaseById = (caseId: string): Case | undefined => {
  return casesData.find(caseItem => caseItem.id === caseId) as Case | undefined;
};

export const getCasesByMultipleSections = (sectionIds: string[]): Case[] => {
  const allCaseIds = sectionIds.flatMap(sectionId => 
    SECTION_CASE_MAPPING[sectionId] || []
  );

  return casesData.filter(caseItem => 
    allCaseIds.includes(caseItem.id)
  ) as Case[];
};