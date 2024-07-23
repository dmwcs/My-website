import { useState, useEffect, useRef } from "react";

const useIndicator = (selectedTab: number) => {
  const tabRefs = useRef<HTMLDivElement[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const updateIndicator = () => {
      const tabElement = tabRefs.current[selectedTab];
      if (tabElement) {
        const rect = tabElement.getBoundingClientRect();
        setIndicatorStyle({
          top: `${tabElement.offsetTop}px`,
          height: `${rect.height}px`,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [selectedTab]);

  return { indicatorStyle, tabRefs };
};

export default useIndicator;
