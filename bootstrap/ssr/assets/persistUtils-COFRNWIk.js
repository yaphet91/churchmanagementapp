import "redux-persist";
const purgePersistedSlice = (persistor, sliceKey) => {
  persistor.purge(sliceKey);
};
export {
  purgePersistedSlice as p
};
