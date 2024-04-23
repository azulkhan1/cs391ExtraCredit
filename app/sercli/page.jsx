import Component from "./component";

async function getData() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any");
  const res = await response.json();

  if (res.error) {
    throw new Error("Failed to fetch the joke");
  }
  return res;
}
const Page = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "10px",
        backgroundColor: "red",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          color: "black",
          backgroundColor: "white",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <h1>Random Joke</h1>
        <h3>{data.setup}</h3>
        <p>{data.delivery}</p>
      </div>
      <Component />
    </div>
  );
};

export default Page;
