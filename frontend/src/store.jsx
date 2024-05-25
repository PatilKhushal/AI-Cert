import { configureStore } from "@reduxjs/toolkit";
import globalContext from "./context/globalContext";

const store = configureStore({
    reducer : {
        globalContext : globalContext
    }
})

export default store