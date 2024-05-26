import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'  // Ensure jest-dom matchers are extended correctly
import Italian from "../Italian"
import { Recipes } from "@/app/lib/definitions";

const recipes: Recipes = []

test('Italian Page', async () => {
  render(<Italian recipes={recipes} />)
  expect(await screen.getByText(/Italian/i)).toBeVisible()
})