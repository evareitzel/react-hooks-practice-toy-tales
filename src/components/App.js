import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(setToys)
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy){
    setToys([...toys, newToy])
  }

  function handleDeleteToy(toyToDelete){
    const updatedToys = toys.filter(toy => 
      toy.id !== toyToDelete.id
    ) 
    setToys(updatedToys)
  }

  function handleUpdateToy(updatedToy){
    const updatedToys = toys.map(toy => {
      return toy.id === updatedToy.id ? updatedToy : toy
    })
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}  onDeleteToy={handleDeleteToy} onUpdateToy={handleUpdateToy}/>
    </>
  );
}

export default App;
