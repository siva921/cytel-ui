// import { call } from 'redux-saga/effects';
// import { getStudies } from '../actions/studyActions';

export function* getStudySaga() {
    // eslint-disable-next-line prettier/prettier
    yield console.log("saga called")
    //   const studies = yield call(getStudies)
    //   console.log("after saga set studies", studies)
    // yield put({ type: "SET_STUDIES", studies: studies.articles });
}
