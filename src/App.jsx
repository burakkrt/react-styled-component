import kedi from "./media/cat.jpg";
import cake from "./media/cake.jpg";
import { useState } from "react";

function App() {

  const [resim, setResim] = useState(kedi);

  return (
    <div className="m-2 bg-secondary px-4 py-3 rounded">
      <div>
        <h1 className={"fs-1 text-info"}>Hello {process.env.NODE_ENV === "development" ? "Developer !" : "React !"}</h1>
      </div>
      <p className="text-bold text-white">Lorem ipsum dolor
        sit amet,
        consetetur
        sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <div className={"overflow-hidden border border-2 shadow-lg"} style={{
        width: "250px",
        height: "250px"
      }}>
        <img className="image w-100 h-100 object-fit-cover m-0" src={resim} alt="Cat Image" style={{ objectPosition: "top" }} />
      </div>
      <button className={"btn btn-danger my-3"} onClick={() => {
        resim === kedi ? setResim(cake) : setResim(kedi);
      }}>Resmi Değiştir
      </button>
    </div>
  );
}

export default App;