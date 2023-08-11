//import Card from "./Components/Card/Card";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div>
        <div>
          <NavBar />
          <ItemListContainer greeting="PreEntrega1Murseli - NavBar" />
        </div>
        {/* <div className="row">
          <div className="col-4">
            <Card
              image="https://picsum.photos/id/1/300/300"
              title="Un título"
              description="Una descripción"
            />
          </div>
          <div className="col-4">
            <Card
              image="https://picsum.photos/id/2/300/300"
              title="Otro título"
              description="Otra descripción"
            />
          </div>
          <div className="col-4">
            <Card
              image="https://picsum.photos/id/3/300/300"
              title="Un título más"
              description="Una descripción más"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
