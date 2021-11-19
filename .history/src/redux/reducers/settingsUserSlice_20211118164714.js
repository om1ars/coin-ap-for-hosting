import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: [{
        name: '',
        email: 
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