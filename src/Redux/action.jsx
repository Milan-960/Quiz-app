import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_AMOUNT,
  CHANGE_TYPE,
  CHANGE_SCORE,
} from "./actionTypes";

export const handleCategoryChnage = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
});
export const handleDifficultyChnage = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload,
});
export const handleAmountChnage = (payload) => ({
  type: CHANGE_AMOUNT,
  payload,
});
export const handleScoreChnage = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});
export const handleTypeChnage = (payload) => ({
  type: CHANGE_TYPE,
  payload,
});
