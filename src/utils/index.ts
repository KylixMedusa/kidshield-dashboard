export const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getHttpErrorMessage = (error: any) => {
  try {
    if (error.response?.data?.message) {
      return error.response.data.message;
    } else {
      return "An error occurred. Please try again later.";
    }
  } catch (err) {
    return "An error occurred. Please try again later.";
  }
};

declare global {
  interface String {
    toTitleCase: () => string;
  }
}

String.prototype.toTitleCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
