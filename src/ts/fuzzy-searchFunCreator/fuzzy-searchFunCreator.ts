import { EnhancedStore } from "@reduxjs/toolkit";
import FuzzySearch = require("fuzzy-search");

export function fuzzySearchCreator(store: EnhancedStore): FuzzySearch<Task[]> {
  return new FuzzySearch(store.getState(), ["description"], {
    caseSensitive: true,
  });
}
