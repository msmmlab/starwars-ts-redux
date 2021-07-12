import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";

const CharactersList: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: State) => state.characters);

  useEffect(() => {
    dispatch(actionCreators.fetchCharacters());
  }, [dispatch]);

  const renderCharacterList = () => {
    return (
      <ul>
        {data.map((character: string) => {
          return <li key={character}>{character}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <h3>Characters </h3>
      {renderCharacterList()}
    </div>
  );
};

export default CharactersList;
