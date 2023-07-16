import { useState, useRef, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";

export function Portal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.getElementById("portal") as HTMLElement;
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return mounted && ref.current
    ? ReactDOM.createPortal(children, ref.current)
    : null;
}
