import { createSlice } from '@reduxjs/toolkit'
const commonSlice = createSlice({
  name: 'common',
  initialState: { isOpenModalDatLich: false },
  allInfo: {},
  district: [],
  ward: [],
  reducers: {
    setIsOpenModal(state, action) {
      state.isOpenModalDatLich = action.payload
    },
    setAllInfo(state, action) {
      state.allInfo = action.payload
    }
  }
})

export const {
  setIsOpenModal,
  setAllInfo
} = commonSlice.actions;

export default commonSlice.reducer