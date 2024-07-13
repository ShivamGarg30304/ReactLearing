import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-500 mb-4">
        TailWind Test
      </h1>
      <Card userName="Shivam Garg" btnText="Click Me" />
      <Card userName="Saloni Bhardwaj" btnText="Visit Me" />
    </>
  );
}

export default App;
