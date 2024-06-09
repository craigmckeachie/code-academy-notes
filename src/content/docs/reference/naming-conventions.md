---
title: Naming Conventions
---

### Camel Casing

```js
//two-words
firstName;
lastName;
numberOfStars;
isChecked;

//one-word
first;
last;
checked;
```

uses: variables (html elements, object, arrays, string, number, boolean), function names, function parameters,

### Dasherized (dashes/hyphens)

```html
cats-list pet-store really-long-name
```

uses: file-names, folder-names

### Snakecase (underscores)

```js
cats_list;
pet_store;
really_long_name;
```

### Pascal Casing

```
DogHouse
JackFlash
```

## Conventions

- file names should be all lower-cased and dasherized if multiple words
- variables should be camel cased

## HTML Element Naming

- nounElement
  - messageParagraph
  - firstNameInput
  - numberOfDaysInput
  - isActiveCheckbox
  - stateDropdown

## Function Naming

- verb
  - display
  - load
  - save
  - delete
    OR
- verbNoun
  - loadUsers, loadUser, fetchUser, fetchUsers
  - displayUser, displayUsers
