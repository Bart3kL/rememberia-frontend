export type AddProps = {
  title: string;
  href: string;
};
export type SubjectsProps = {
  title: string;
  href: string;
  topics: {
    href: string;
    title: string;
  }[];
};

export interface HeaderDataProps {
  add: AddProps[];
  homePageLabel: string;
  logInLabel: string;
  logoSrc: string;
  subjectsLabel: string;
  rankingLabel: string;
  searchBarLabel: string;
  signInLabel: string;
  subjects: SubjectsProps[];
}
