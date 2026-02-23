import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";

import modalReducer from "../../slices/modals/modalSlice";
import { DefaultModal } from "./index";

const renderWithStore = (isOpen: boolean, children: React.ReactNode = null) => {
  const store = configureStore({
    reducer: { modals: modalReducer },
    preloadedState: {
      modals: { modalWindow: { isOpen, children } },
    },
  });

  return {
    ...render(
      <Provider store={store}>
        <DefaultModal />
      </Provider>
    ),
    store,
  };
};

describe("DefaultModal", () => {
  it("renders nothing when isOpen is false", () => {
    renderWithStore(false, <p>Hidden content</p>);
    expect(screen.queryByText("Hidden content")).not.toBeInTheDocument();
  });

  it("renders children when isOpen is true", () => {
    renderWithStore(true, <p>Modal content</p>);
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("renders JSX children (e.g. heading and button)", () => {
    renderWithStore(
      true,
      <div>
        <h2>Delete card</h2>
        <button>Confirm</button>
      </div>
    );
    expect(screen.getByText("Delete card")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /confirm/i })).toBeInTheDocument();
  });

  it("closes the modal when clicking the overlay", () => {
    const { store } = renderWithStore(true, <p data-testid="content">Modal content</p>);

    expect(store.getState().modals.modalWindow.isOpen).toBe(true);

    // Traverse up from the child to find overlay (ModalOverlay > ModalInner > content)
    const content = screen.getByTestId("content");
    const overlay = content.parentElement!.parentElement!;
    fireEvent.click(overlay);

    expect(store.getState().modals.modalWindow.isOpen).toBe(false);
  });

  it("does NOT close the modal when clicking the inner container", () => {
    const { store } = renderWithStore(true, <p data-testid="content">Modal content</p>);

    expect(store.getState().modals.modalWindow.isOpen).toBe(true);

    // Click ModalInner — stopPropagation prevents the overlay handler from firing
    const modalInner = screen.getByTestId("content").parentElement!;
    fireEvent.click(modalInner);

    expect(store.getState().modals.modalWindow.isOpen).toBe(true);
  });
});
