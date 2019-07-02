const INITIAL_STATE = {
  Name: "lakshya",
  Age: "23",
  Email: "lakshya.chandra0@gmail.com"
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
  }
};
