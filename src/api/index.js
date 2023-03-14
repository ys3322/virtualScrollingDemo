const data = require("./mock/data");

export function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([null, data]);
    }, 500);
  });
}
