export interface SubjectCardProps {
  studySets: { words: { title: string }[] }[];
  subjectTitle: string;
  sets: string;
  set: string;
  preview: string;
  onClick: () => void;
}
