export const abc = data => {
  console.log(" i m in action this is the data you sent", data);
  return {
    type: "INCREMENT",
    data: data
  };
};
