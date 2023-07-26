import React, {useState, useEffect} from 'react'

const useStickyMode = (offset) => {
  const [scrollFlag, setScrollFlag] = useState(false);

  /** scroll 이벤트를 위한 스로틀 함수 */
  const throttle = (callback, delay) => {
    let timer = null;
    return () => {
        if (timer) return;
        timer = setTimeout(() => {
            callback();
            timer = null;
        }, delay);
    };
  };

  useEffect(() => {
    /** 스크롤 여부 판별 함수 */
    const updateScroll = () => {
        const { scrollY } = window;
        const isScrolled = scrollY >= offset;
        setScrollFlag(isScrolled);
    };
    /** 스크롤 이벤트 콜백 함수 */
    const handleScroll = throttle(updateScroll, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return scrollFlag;
}

export default useStickyMode