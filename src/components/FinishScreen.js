import { type } from "@testing-library/user-event/dist/type";

function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "end" })}>
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
