import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "./constant";
//Reducer thunk
// fetch API getAllProduct
export const getAllVocabulary = createAsyncThunk(
  "vocabulary/getallvocabulary",
  async () => {
    try {
      const response = await axios.get(`${apiUrl}/vocabularys`);
      return response.data;
    } catch (error) {
      console.log("error get all vocabulary");
    }
  }
);
export const NewVocabulary = createAsyncThunk(
  "vocabulary/creatnewvocabulary",
  async (NewVocabulary) => {
    try {
      const response = await axios.post(`${apiUrl}/vocabularys`, NewVocabulary);
      return response.data;
    } catch (error) {
      console.log("error get all vocabulary");
    }
  }
);
export const getVocabularyByDay = createAsyncThunk(
  "vocabulary/getVocabularyByDay",
  async () => {
    try {
      const response = await axios.get(`${apiUrl}/vocabularys/days`);
      return response.data;
    } catch (error) {
      console.log("error get vocabulary by day");
    }
  }
);
export const EditVocabulary = createAsyncThunk(
  "vocabulary/editVocabulary",
  async (param) => {
    const { id, editVocabularyForm } = param;
    try {
      const response = await axios.put(
        `${apiUrl}/vocabularys/${id}`,
        editVocabularyForm
      );
      return response.data;
    } catch (error) {
      console.log("erroo editvocabulary");
    }
  }
);
export const DoneLernVocabulary = createAsyncThunk(
  "vocabulary/DoneLernVocabulary",
  async (param) => {
    const { id, editVocabularyForm } = param;
    try {
      const response = await axios.put(
        `${apiUrl}/vocabularys/${id}`,
        editVocabularyForm
      );
      return response.data;
    } catch (error) {
      console.log("erroo DoneLernVocabulary");
    }
  }
);
export const DeleteVocabulary = createAsyncThunk(
  "vocabulary/deleteVocabulary",
  async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/vocabularys/${id}`);
      return response.data;
    } catch (error) {
      console.log("erroo deletevocabulary");
    }
  }
);
export const getTranslateVocabulary = createAsyncThunk(
  "vocabulary/translateVocabulary",
  async () => {
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=hot&langpair=en|vi`,
        {},
        { headers: "" }
      );
      return response.data.responseData;
      console.log(response.data.responseData);
    } catch (error) {
      console.log("error get vocabulary by day");
    }
  }
);
const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState: {
    allVocabulary: [],
    vocabularyByDay: [],
    searchvalue: "",
    singleVocabulary: {},
    translateVocabulary: {},
    isLoading: false,
  },
  reducers: {
    emtyVocabulary(state, action) {
      state.allVocabulary = [];
      state.vocabularyByDay = [];
      state.searchvalue = "";
      state.singleVocabulary = {};
      state.isLoading = false;
    },
    getSingleProduct(state, action) {
      const todoId = action.payload;
      state.singleVocabulary = state.allVocabulary.find((vocabulary) => {
        return vocabulary._id == todoId;
      });
    },
  },
  extraReducers: {
    // Get all vacabulary
    [getAllVocabulary.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllVocabulary.fulfilled]: (state, action) => {
      if (action.payload) {
        state.allVocabulary = action.payload.vocabulary;
        state.isLoading = false;
      } else {
        state.isLoading = false;
        state.allVocabulary = [];
      }
    },
    [NewVocabulary.fulfilled]: (state, action) => {
      console.log(action.payload.Vocabulary);

      state.allVocabulary.push(action.payload.Vocabulary);
      console.log(state.allVocabulary);
    },
    [getVocabularyByDay.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getVocabularyByDay.fulfilled]: (state, action) => {
      if (action.payload) {
        state.vocabularyByDay = action.payload.vocabulary;
        state.isLoading = false;
      } else {
        state.isLoading = false;
        state.vocabularyByDay = [];
      }
    },
    [EditVocabulary.fulfilled]: (state, action) => {
      state.allVocabulary = state.allVocabulary.map((vocabulary) => {
        return vocabulary._id == action.payload.vocabulary._id
          ? action.payload.vocabulary
          : vocabulary;
      });
    },
    [DeleteVocabulary.fulfilled]: (state, action) => {
      state.allVocabulary = state.allVocabulary.filter((vocabulary) => {
        return vocabulary._id != action.payload.vocabulary._id;
      });
    },
    [DoneLernVocabulary.fulfilled]: (state, action) => {
      state.vocabularyByDay = state.vocabularyByDay.filter((vocabulary) => {
        return vocabulary._id != action.payload.vocabulary._id;
      });
      console.log("done lern");
    },
    // // get product by category
    // [getProductByCategory.fulfilled]: (state, action) => {
    //   console.log("Done");
    //   state.productbyCaterogy = action.payload;
    // },
    // [SetProductByCategory.fulfilled]: (state, action) => {
    //   console.log("Done");
    //   state.allProduct = action.payload;
    // },
    // //get single product
    // [getSingleProduct.fulfilled]: (state, action) => {
    //   console.log("Done");
    //   state.singleProduct = action.payload;
    // },
  },
});

//creat reducer
const vocabularyReducer = vocabularySlice.reducer;

//export selector
export const vocabularySelector = (state) =>
  state.vocabularyReducer.allVocabulary;
export const searchSelector = (state) => state.vocabularyReducer.searchvalue;
export const singleProductSelector = (state) =>
  state.vocabularyReducer.singleVocabulary;
export const vocabularyByDaySelector = (state) =>
  state.vocabularyReducer.vocabularyByDay;
export const isLoadingVocabularySelector = (state) =>
  state.vocabularyReducer.isLoading;

//export action

export const { emtyVocabulary, getSingleProduct } = vocabularySlice.actions;

//export reducer
export default vocabularyReducer;
