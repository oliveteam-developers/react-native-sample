import { put, takeLatest, delay } from 'redux-saga/effects';
import * as actions from  './actions';

function* increaseRequest({ payload }: ReturnType<typeof actions.increaseRequest>) {
  try {
    yield delay(2000);
    yield put(actions.increaseSuccess(payload));
  } catch (e) {
    yield put(actions.increaseFailed());
  }
}

export default function* homeSaga() {
  yield takeLatest(actions.increaseRequest, increaseRequest);
}
