import { persistStore } from 'redux-persist';

export const purgePersistedSlice = (persistor, sliceKey) => {
    persistor.purge(sliceKey);
};
