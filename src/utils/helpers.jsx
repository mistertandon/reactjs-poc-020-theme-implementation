export const redirectToSocialAccount = (accountUrl) => {
  if (accountUrl) window.open(accountUrl, "_blank");
  return;
};
