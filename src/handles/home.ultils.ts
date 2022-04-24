/* eslint-disable no-useless-catch */

interface Utils {
  renderTags: (tags?: string[]) => string[];
  interestPopular: string[];
  isSearch: boolean;
  valueSearch: string;
  loadingInterest: boolean;
  loadingContactList: boolean;
}

export default function HomeUtils(): Utils {
  
  // render tag
  const renderTags = (tags?: string[]) => {
    let newTags: string[] = [];
    if (tags) {
      const tagTerm = [...tags];
      if (tagTerm.length <= 0) {
        newTags = [...interestPopular];
      } else {
        if (tagTerm.length > 20) {
          newTags = tagTerm.slice(0, 20);
        } else {
          newTags = tagTerm;
        }
      }
    }
    return newTags;
  };

  return {
    renderTags,
    isSearch,
    valueSearch,
    loadingInterest,
    loadingContactList
  };
}
