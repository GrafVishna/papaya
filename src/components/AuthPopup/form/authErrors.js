export const getErrors = (error) => {
  switch (error) {
    case "auth/missing-password":
      return "error-password";
    case "auth/invalid-credential":
      return "error-credential";
    case "auth/invalid-email":
      return "error-email";
    default:
      return "";
  }
};
