import { createSlice } from '@reduxjs/toolkit'
const commonSlice = createSlice({
  name: 'common',
  initialState: { isOpenModalDatLich: false },
  province: [],
  district: [],
  ward: [],
  reducers: {
    setIsOpenModal(state, action) {
      state.isOpenModalDatLich = action.payload
    }
  }
})

export const {
  setIsOpenModal
} = commonSlice.actions;

export default commonSlice.reducer