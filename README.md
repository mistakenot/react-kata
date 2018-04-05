# React front end code kata

The aim of this project is to demonstrate modern, test-driven development techniques via a small code kata, utilising React and its associated tools.

The requirements for this kata are described in [here](/requirements.md).

## Tools

The primary tools demonstrated are:
- [React](https://reactjs.org/) - Declarative user interfaces.
- [Redux](https://redux.js.org/) - Predictable, event driven state management.
- [Enzyme](http://airbnb.io/enzyme/) - React testing library.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Organisation

The source code for the feature is organised [by feature](https://jaysoo.ca/2016/02/28/organizing-redux-application/#rule-1-organize-by-feature). Files are named with the convention `feature.function.js` for implementation files, and `feature.function.test.js` for the test files to make it easier to list and jump to files in editors.

## Development Process

The development process for this kata is documented in the file [diary.md](/diary.md). It is split into a few numbered stages. These stages are marked in the repositry history using tags: `zero`, `one` `two` and so on. For instance, to jump to the very start of development, you would use `git checkout zero`. To list all available tagged stages, use `git tag -l`.