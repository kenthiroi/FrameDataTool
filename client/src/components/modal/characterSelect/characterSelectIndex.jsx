import React from "react";
import CharacterItem from "./characterItem";

function CharacterSelectIndex(props){
  
  let characterIndex;

  switch (props.game){
    case "gbvs-vanilla":
      characterIndex = [
        "abelial",
        "beelzebub",
        "belial",
        "cagliostro",
        "charlotta",
        "djeeta",
        "eustace",
        "fastiva",
        "ferry",
        "gran",
        "katalina",
        "lancelot",
        "lowain",
        "metera",
        "narmaya",
        "percival",
        "six",
        "soriz",
        "uno",
        "vaseraga",
        "vira",
        "yuel",
        "zeta",
        "zooey"
      ];
      break;
    case "gbvs-rising":
      characterIndex = [
        "abelial",
        "anila",
        "beelzebub",
        "belial",
        "cagliostro",
        "charlotta",
        "djeeta",
        "eustace",
        "fastiva",
        "ferry",
        "gran",
        "grimnir",
        "katalina",
        "lancelot",
        "lowain",
        "metera",
        "narmaya",
        "nier",
        "percival",
        "siegfried",
        "six",
        "soriz",
        "uno",
        "vaseraga",
        "vira",
        "yuel",
        "zeta",
        "zooey"
      ];
      break;
    case "king-of-fighters-xv":
      characterIndex = [
        "isla",
      ];
      break;
  }

  return (
    <div>
      {characterIndex.map(character => {
          <CharacterItem character={character}/>
        })
      }
    </div>
  )
}

export default CharacterSelectIndex;