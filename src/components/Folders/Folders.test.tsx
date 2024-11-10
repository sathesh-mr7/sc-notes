import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Folders from "./Folders";

const mockStore = configureStore([]);
const initialState = {
  showModal: { visible: false, modalId: null },
  folders: [{ name: "Folder1" }, { name: "Folder2" }]
};

describe("Folders Component", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test("renders folders list", () => {
    render(
      <Provider store={store}>
        <Folders />
      </Provider>
    );

    expect(screen.getByText("Folder1")).toBeInTheDocument();
    expect(screen.getByText("Folder2")).toBeInTheDocument();
  });

  test("shows empty list message when no folders", () => {
    store = mockStore({ ...initialState, folders: [] });

    render(
      <Provider store={store}>
        <Folders />
      </Provider>
    );

    expect(screen.getByText("No folders found")).toBeInTheDocument();
  });
});