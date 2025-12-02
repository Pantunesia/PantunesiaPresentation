import { useState, useEffect } from 'react';

export const useSlideAnimation = (isActive, itemCount) => {
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setVisibleItems(0);
    } else {
      // Show title only initially
      setVisibleItems(0);
    }
  }, [isActive]);

  const handleNextItem = () => {
    if (visibleItems < itemCount) {
      setVisibleItems(visibleItems + 1);
    }
  };

  const showAllItems = () => {
    setVisibleItems(itemCount);
  };

  return { visibleItems, handleNextItem, showAllItems };
};
