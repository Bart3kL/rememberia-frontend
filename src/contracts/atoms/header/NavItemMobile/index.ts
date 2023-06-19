export interface NavItemMobileProps {
  href: string;
  idx: number;
  title: string;
  isActiveTab: number;
  topics: {
    href: string;
    title: string;
  }[];
  handleActiveTab: (v: number) => void;
}
