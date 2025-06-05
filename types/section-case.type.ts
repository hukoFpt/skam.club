export interface Case {
  id: string;
  title: string;
  price: number;
  eventPoint: number;
  imageUrl: string;
  caseUrl: string;
  likes: number;
  tags: string;
}

export interface CaseCardProps {
  case: Case;
  onClick?: (caseId: string) => void;
}
