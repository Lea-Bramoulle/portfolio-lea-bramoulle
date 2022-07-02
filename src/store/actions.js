export const CHANGE_FRONT_CATEGORY = 'CHANGE_FRONT_CATEGORY';
export const CHANGE_BACK_CATEGORY = 'CHANGE_BACK_CATEGORY';
export const CHANGE_OTHER_CATEGORY = 'CHANGE_OTHER_CATEGORY';

export const changeSelectedCategoryFront = () => ({
  type: CHANGE_FRONT_CATEGORY,
});

export const changeSelectedCategoryBack = () => ({
  type: CHANGE_BACK_CATEGORY,
});

export const changeSelectedCategoryOther = () => ({
  type: CHANGE_OTHER_CATEGORY,
});
