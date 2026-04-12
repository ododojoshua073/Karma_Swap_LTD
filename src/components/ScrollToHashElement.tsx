import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");

    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const timeout = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500); 

    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToHashElement;