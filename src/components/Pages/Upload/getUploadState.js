export const getUploadState = (state, setState) => {
  switch (state) {
    case "paused":
      setState("paused");
      break;
    case "running":
      setState("running");
      break;
  }
};
