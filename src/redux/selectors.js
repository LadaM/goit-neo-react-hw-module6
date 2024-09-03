import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.isLoading;
export const selectNameFilter = state => state.filters.name;
const selectContactItems = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContactItems, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
)