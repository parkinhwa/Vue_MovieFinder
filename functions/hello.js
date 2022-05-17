exports.handler = async function () {
  console.log("hello");
  return {
    statusCode: 304,
    body: JSON.stringify({ name: "hello" }),
  };
};
