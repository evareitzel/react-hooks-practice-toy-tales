import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDeleteToy, onUpdateToy}) {
  
  const toyComponents = toys.map(toy => <ToyCard toy={toy} key={toy.id} onDeleteToy={onDeleteToy} onUpdateToy={onUpdateToy}/>)

  return (
    <div id="toy-collection">{toyComponents}</div>
  );
}

export default ToyContainer;
