import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: [{
        null
    }]
}

const settingsUserSlice = createSlice({
    name: 'seetingsUser',
    initialState,
    reducers: {
    
    }
});

export const {

} = settingsUserSlice.actions
export default settingsUserSlice.reducer