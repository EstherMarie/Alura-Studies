import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const lista = screen.getByRole("list");
  const labelTarefa = screen.getByLabelText(/estudo/);
  const labelTempo = screen.getByLabelText(/Tempo/);
  // const labelCronometro = screen.getByLabelText(/cronometro/);

  expect(lista).toBeInTheDocument();
  expect(labelTarefa).toBeInTheDocument();
  expect(labelTempo).toBeInTheDocument();
  // expect(labelCronometro).toBeInTheDocument();
});
