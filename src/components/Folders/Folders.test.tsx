import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Folders from "./Folders";
import { BrowserRouter as Router } from "react-router-dom";

const mockStore = configureStore([]);
const initialState = {
  showModal: { visible: false, modalId: null },
  folders: [{ id: "1", name: "Folder 1" }, { id: "2", name: "Folder 2" }]
};

describe("Folders Component", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("renders folders list", () => {
    render(
      <Provider store={store}>
        <Router>
          <Folders />
        </Router>
      </Provider>
    );

    expect(screen.getByText("Folder 1")).toBeInTheDocument();
    expect(screen.getByText("Folder 2")).toBeInTheDocument();
  });
});