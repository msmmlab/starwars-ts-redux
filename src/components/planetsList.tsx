import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";

const PlanetList: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: State) => state.planets);

  useEffect(() => {
    dispatch(actionCreators.fetchPlanets());
  }, [dispatch]);

  const renderPlanetsList = () => {
    return (
      <ul>
        {data.map((planet: string) => {
          return <li key={planet}>{planet}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <h3>Planets:</h3>
      {renderPlanetsList()}
    </div>
  );
};

export default PlanetList;
