import { useOverlayScrollbars } from "overlayscrollbars-react";
import { useEffect } from "react";

// example usage
const UseScroll = (ref) => {
  const [initialize, instance] = useOverlayScrollbars({
    scrollbars: {
      autoHide: true,
    },
  });

  useEffect(() => {
    initialize(ref.current);
  }, [initialize]);
};

export default UseScroll;
