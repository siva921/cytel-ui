import { takeLatest } from 'redux-saga/effects'

import { getStudySaga, createStudySaga } from './sagas/studySaga'

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* actionWatcher() {
    yield takeLatest('GET_STUDIES', getStudySaga)
    yield takeLatest('CREATE_STUDIES', createStudySaga)
}
