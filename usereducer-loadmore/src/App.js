import React, { useReducer } from "react";
import "./App.css";

const allData = new Array(25).fill(0).map((_val, i) => i + 1);
const perPage = 10;

const initialState = {
  loading: false,
  more: true,
  data: [],
  after: 0,
};

const FETCH_TYPES = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload],
        more: action.payload.length === perPage,
        after: state.after + action.payload.length,
      };
    case FETCH_TYPES.FETCH_FAILURE:
      throw new Error("Unknown action!");
    default:
      return state;
  }
};

function App() {
  // const [data] = useState(allData.slice(0, perPage));

  const [state, dispatch] = useReducer(reducer, initialState);

  const { loading, data, after, more } = state;

  const handleLoadMore = () => {
    dispatch({ type: FETCH_TYPES.FETCH_START });

    const newData = allData.slice(after, after + perPage);

    dispatch({ type: FETCH_TYPES.FETCH_SUCCESS, payload: newData });
  };

  return (
    <div className="App">
      <ul>
        {data.map((row) => (
          <li key={row} style={{ background: "orange" }}>
            {row}
          </li>
        ))}

        {loading && <li>loading...</li>}

        {!loading && more && (
          <li style={{ background: "green" }}>
            <button onClick={handleLoadMore}>Load more...</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
