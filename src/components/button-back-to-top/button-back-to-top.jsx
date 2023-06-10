import { useState, useEffect } from 'react';

export function ButtonBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top-button fixed bottom-8 right-4 bg-neutral-500 text-white text-2xl w-14 h-14 rounded-full flex justify-center items-center cursor-pointer opacity-0 transition-opacity duration-300 ${isVisible ? 'opacity-100' : ''}`} onClick={scrollToTop}>
      <span>&#8593;</span>
    </div>
  );
}
