import {
  AnimalCard,
  AnimalCardTitle,
  AnimalContent,
  AnimalImage,
  AnimalImageFrame
} from "./StyleComponent";

export default function AnimalsCard({ title, content, imageSrc }) {

  return (
    <AnimalCard>
      <AnimalImageFrame>
        <AnimalImage src={imageSrc} alt="Animal Image" />
      </AnimalImageFrame>
      <AnimalContent>
        <AnimalCardTitle>{title}</AnimalCardTitle>
        {content}
      </AnimalContent>
    </AnimalCard>
  );
}