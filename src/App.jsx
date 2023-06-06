import { AnimalData } from "./animaldata";
import AnimalsCard from "./AnimalsCard";


export default function App() {

  return AnimalData.map((data) => {
    return (
      <AnimalsCard title={data.animal} content={data.content} imageSrc={data.imageSrc} key={data.id} />
    );
  });
}