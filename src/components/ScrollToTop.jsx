import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye line window ko hamesha top par bhej degi
    window.scrollTo(0, 0);
  }, [pathname]); // Jab bhi path (URL) badlega, ye chalega

  return null;
};

export default ScrollToTop;