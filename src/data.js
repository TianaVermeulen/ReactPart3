const animals = [
    { name: "cat", sound: "meow" },
    { name: "dog", sound: "woof" }
  ];

  function useAnimal(animal){
    return [
      animal.name,
      function (){
        console.log(animal.sound)
      }
    ]
  };

  export default animals;
  export {useAnimal};