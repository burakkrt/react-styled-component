import AnimalsCard from "./AnimalsCard";

import kedi from "./media/cat.jpg";
import cake from "./media/cake.jpg";

export default function Cat() {
  return (
    <AnimalsCard title="hellow asdasd">
      <div className={"overflow-hidden border border-2 shadow-lg"} style={{
        width: "250px",
        height: "250px"
      }}>
        <img className="image w-100 h-100 object-fit-cover m-0" src={kedi} alt="Cat Image" style={{ objectPosition: "top" }} />
      </div>
    </AnimalsCard>
  );
}