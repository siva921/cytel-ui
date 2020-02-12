import { call, put } from 'redux-saga/effects'
import { getStudies } from '../actions/studyActions'

export function* getStudySaga() {
    const studies = yield call(getStudies)
    yield put({ type: 'SET_STUDIES', studies: studies })
}
