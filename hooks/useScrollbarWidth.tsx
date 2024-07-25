import { useEffect, useState } from "react";

function useScrollbarWidth() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const scrollDiv = document.createElement("div");
      scrollDiv.style.width = "100px";
      scrollDiv.style.height = "100px";
      scrollDiv.style.overflowY = "scroll";
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      document.body.appendChild(scrollDiv);
      setScrollbarWidth(scrollDiv.offsetWidth - scrollDiv.clientWidth);
      document.body.removeChild(scrollDiv);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return scrollbarWidth;
}

export default useScrollbarWidth;
