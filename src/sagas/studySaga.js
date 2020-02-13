import { call, put } from 'redux-saga/effects'
import { getStudies, createStudy } from '../actions/studyActions'

export function* getStudySaga() {
    const studies = yield call(getStudies)
    yield put({ type: 'SET_STUDIES', studies: studies })
}

export function* createStudySaga(payload) {
    yield call(createStudy, payload.study)
}
