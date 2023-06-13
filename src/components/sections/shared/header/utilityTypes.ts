export type AddProps = {
  title: string;
  href: string;
};
export type SubjectsProps = {
  subjects: {
    title: string;
    href: string;
    topics: {
      href: string;
      title: string;
    }[];
  }[];
  subjectsLabel: string;
};

export interface HeaderDataProps {
  add: AddProps[];
  homePageLabel: string;
  logInLabel: string;
  logo: string;
  rankingLabel: string;
  searchBarLabel: string;
  signInLabel: string;
  subjects: SubjectsProps;
}
