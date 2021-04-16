import { call, put, takeLatest } from "@redux-saga/core/effects";
import { failureUserData, successUserData } from "../actions/actions";
import { REQUEST_USER_DATA } from "../actions/actionsTypes";
import { fetchUserDetails } from "../api";

export function* handleRequestUser() {
    try {
      const userDetails = yield call(fetchUserDetails);
      yield put(successUserData(userDetails));
    } catch (error) {
      yield put(failureUserData(error.message));
    }
  }
  export default function* userDetails() {
    yield takeLatest(REQUEST_USER_DATA, handleRequestUser);
  }
    