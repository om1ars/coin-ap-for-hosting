import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: [{
        name: '',
        
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