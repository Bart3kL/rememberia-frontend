import { HeaderProps } from "../../components/sections/shared/Header/types";

export interface BranchOfScienceProps {
  header: {
    fields: HeaderProps["header"];
  };
  subjects: any;
  navigationBar: {
    branch: { href: string; title: string }[];
  };
  subjectsLabels: {
    preview: string;
    set: string;
    sets: string;
  };
}
