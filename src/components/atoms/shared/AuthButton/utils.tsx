import { Icons } from "../../../../shared";

export const chooseIcon = (icon: string) => {
  switch (true) {
    case "google" == icon:
      return <Icons.GoogleSVG />;
    case "facebook" == icon:
      return <Icons.FacebookSVG />;
    case "apple" == icon:
      return <Icons.AppleSVG />;
  }
};
