export const dateNow = (date) => {
  let objDate = new Date(date);
  let day = ("0" + objDate.getDate()).slice(-2);
  let month = ("0" + (objDate.getMonth() + 1)).slice(-2);
  let year = objDate.getFullYear().toString().slice(-2);
  let mins = ("0" + objDate.getMinutes()).slice(-2);
  let secs = ("0" + objDate.getSeconds()).slice(-2);
  let hours = ("0" + objDate.getHours()).slice(-2);
  let correctDate =
    day + "." + month + "." + year + " " + hours + ":" + mins + ":" + secs;
  return correctDate;
};
