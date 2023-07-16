import { useEffect, useState } from "react";

function getScrollbarWidth(): number {
  const documentWidth = document.documentElement.clientWidth;

  const windowWidth = window.innerWidth;

  return windowWidth - documentWidth;
}

let scrollPosition = 0;

export function hideScrollbar(): void {
  scrollPosition = window.pageYOffset;
  const app: any = document.querySelector("#root")!;

  app?.setAttribute("style", `position: fixed; overflow: hidden; width: 100%`);

  const scrollbarWidth = getScrollbarWidth();

  document.documentElement.style.marginRight = `${scrollbarWidth}px`;
}

export function restoreScrollbar(): void {
  const app: any = document.querySelector("#root")!;
  app?.removeAttribute("style");
  document.documentElement.style.marginRight = "";

  const html = document.querySelector("html")!;

  html.style.scrollBehavior = "auto";
  window.scrollTo(0, scrollPosition);
  html.style.scrollBehavior = "";
}

export function usePreventBackgroundScrolling(show: boolean) {
  const [firstLoad, updateFirstLoad] = useState(true);

  useEffect(() => {
    if (show) {
      hideScrollbar();
      if (firstLoad) {
        updateFirstLoad(false);
      }
    } else {
      if (firstLoad) {
        updateFirstLoad(false);
        return;
      }
      restoreScrollbar();
    }
  }, [show]);
}
