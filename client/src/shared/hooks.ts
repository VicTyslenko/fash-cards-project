import { type RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>, handler: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = ref?.current;
      if (!element || element.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("pointerdown", listener);

    return () => {
      document.removeEventListener("pointerdown", listener);
    };
  }, [ref, handler]);
};
