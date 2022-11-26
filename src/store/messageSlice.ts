import { createSlice } from '@reduxjs/toolkit'

const MessageSlice = createSlice({
  name: 'messages',
  initialState: [

    { message: "Hi there!", type: "inc" },
    { message: "Hi you too", type: "out" },
    { message: "How are you?", type: "inc" },

  ],
  reducers: {
    messageAdd(state, action) {
      state.push({
        message: action.payload.message,
        type: action.payload.type
      })
    }
  }
})


export const { messageAdd } = MessageSlice.actions
export default MessageSlice.reducer