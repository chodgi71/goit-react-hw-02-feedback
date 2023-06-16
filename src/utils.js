export const countPositiveFeedbackPercentage = (goods, total) => {
  const percentage = Math.round((goods / total) * 100);
  return `${percentage}%`;
};

export const countTotalFeedback = feedback => {
  let total = 0;
  for (const key in feedback) {
    total += feedback[key];
  }
  return total;
};
