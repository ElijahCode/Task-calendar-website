import { EnhancedStore } from "@reduxjs/toolkit";
import FuzzySearch from "fuzzy-search";

export function fuzzySearchCreator(store: EnhancedStore): any {
  return new FuzzySearch(store.getState(), ["description"], {
    caseSensitive: true,
  });
}
