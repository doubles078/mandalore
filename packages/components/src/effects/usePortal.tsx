import { useEffect, useRef } from "react";

/**
 * Creates DOM element to be used as React root.
 */
function createRootElement(id: string) {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
}

/**
 * Appends element as last child of body.
 */
function addRootElement(rootElem: Element) {
  if (document && document.body && document.body.lastElementChild) {
    document.body.insertBefore(
      rootElem,
      document.body.lastElementChild.nextElementSibling
    );
  }

  return true;
}

/**
 * Hook to create a React Portal.
 */
function usePortal(id: string) {
  const rootElemRef = useRef<HTMLDivElement | null>(null);

  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    const existingParent = document.querySelector(`#${id}`);
    // Parent is either a new root or the existing dom element
    const parentElem = existingParent || createRootElement(id);

    // If there is no existing DOM element, add a new one.
    if (!existingParent) {
      addRootElement(parentElem);
    }

    // Add the detached element to the parent
    parentElem.appendChild(rootElemRef.current as Node);

    return function removeElement() {
      rootElemRef!.current!.remove();
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []);

  /**
   *  https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   */
  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  };

  return getRootElem();
}

export default usePortal;
