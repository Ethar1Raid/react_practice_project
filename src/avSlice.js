import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://pixabay.com/images/download/projector-lenses-multimedia-814832_640.jpg",
      name: "Projector",
      cost:  235,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/techland-audio-audiovector-stereo-1822630_640.jpg",
      name: "Speakers",
      cost:  100,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/microphone-stage-black-and-white-1505182_640.jpg",
      name: "Microphones",
      cost:  80,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/white-board-startup-start-up-593300_640.jpg",
      name: "Whiteboard",
      cost:  50,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/sign-signpost-waypoint-heaven-237959_640.jpg",
      name: "Signage",
      cost:  30,
      quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
