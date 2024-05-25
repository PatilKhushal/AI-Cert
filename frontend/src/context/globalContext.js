import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice(
    {
        name : 'globalSlice',
        initialState : 
        {
            modalVisibility : 1,
            taskArr : [],
            isDark : true,
            currentUpdateTask : ""
        },
        reducers : {
            setModalVisibility : (state, action) =>
            {
                state.modalVisibility = action.payload;
            },
            setTaskArr : (state, action) => {
                state.taskArr = action.payload;
            },
            setIsDark : (state, action) => {
                state.isDark = action.payload;
            },
            setCurrentUpdateTask : (state, action) => {
                state.currentUpdateTask = action.payload;
            }
        }
    }
);

export const { setModalVisibility, setTaskArr, setIsDark, setCurrentUpdateTask } = globalSlice.actions;
export default globalSlice.reducer;