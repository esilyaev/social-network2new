import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Message = {
  message: string;
  type: "inc" | "out";
};

const initialState: Message[] = [
  { message: "Hi there!", type: "inc" },
  { message: "Hi you too", type: "out" },
  { message: "How are you?", type: "inc" },
]

const MessageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messageAdd(state, action: PayloadAction<Message>) {
      state.push({
        message: action.payload.message,
        type: action.payload.type
      })
    }
  }
})


export const { messageAdd } = MessageSlice.actions
export default MessageSlice.reducer