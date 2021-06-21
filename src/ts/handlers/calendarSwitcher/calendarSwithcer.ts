import { EnhancedStore } from "@reduxjs/toolkit";
import { calendarRender } from "../../renders/calendarRender";

export function createCalendarSwitchers(store: EnhancedStore, date: Date) {
  function incrementer(): void {
    const newDate = date.setMonth(date.getMonth() + 1);
    calendarRender(store, newDate);
  }
  function decrementer(): void {
    const newDate = date.setMonth(date.getMonth() - 1);
    calendarRender(store, newDate);
  }

  return [incrementer, decrementer];
}
