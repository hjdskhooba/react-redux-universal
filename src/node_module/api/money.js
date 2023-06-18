const BASE_URL = "https://api.apilayer.com/currency_data/convert";

let myHeaders = new Headers();
myHeaders.append("apikey", "x7Xowft7bHq4cpArYHmM05qslgzUOF3I");

let requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

export const getResult = async (inst) => {
  const data = fetch(
    `${BASE_URL}?to=${inst.to}&from=${inst.from}&amount=${inst.amount}`,
    requestOptions
  )
  return data;
};
