import Header from "./component/Header";
import Entry from "./component/Entry";
import data from "./data";

function App() {
  const entryElements = data.map((entry) => {
    console.log(entry);
    return (
      <Entry
        key={entry.id}
        {...entry}
      />
    );
  });
  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}
export default App;
