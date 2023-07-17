export interface SubjectCardProps {
  studySets: {
    title: string;
    author: string;
    words: { title: string }[];
  }[];
  subjectTitle: string;
  sets: string;
  set: string;
  preview: string;
  onClick: () => void;
}
