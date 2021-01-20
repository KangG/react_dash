import axios from "axios";

const API_URL = `${WEBPACK_CONFIG_API_URL}`;
const isLocal = API_URL.indexOf("localhost") >= 0 ? true : false;

const request = axios.create({
    timeout: 8000,
    baseURL: API_URL,
    responseType: "json",
    withCredentials: true
});

request.interceptors.request.use(
    (config) => {
        // TODO: 필요시 해더 설정 추가
        return config;
    }, (error) => {
        // Do something with request error
        return Promise.reject(error);
    });

// response 받을 때 오류 처리 중간 처리
// request.interceptors.response.use(
//     (response) => {
//     // 토큰값 다시 설정
//     try {
//         if (response.headers.token != undefined && response.headers.token != null && response.headers.token != '') {
//             // 토큰 재발행
//             commonStore.setToken(response.headers.token);
//         }
//     } catch (error) { console.log(error); }

//     // 응답은 정상이나 토큰값이 없거나 유효시간이 지났을 경우
//     if (response.data.code == 401) {
//         window.location.href = '/auth/sso';
//         return response;
//     }

//     try {
//         if (response.data.success == false) {
//             console.log('서버에서 에러가 발생하였습니다.', response);
//             console.log('ERROR: ', response.data.msg);
//             alert.meg(response.data.msg);
//         }
//     }
//     catch { }

//     return response;
// }, (error) => { // 요청 및 서버오류 공통 처리
//     // Do something with response error
//     // API 서버에 연결이 안될 경우
//     if (error.message === "Network Error" || error.response === undefined) {
//         alert.meg(`서버에 연결할 수 없습니다. \n 잠시 후 다시 시도해 주시기 바랍니다.`);
//         ObjectUtility.loadingLayer(false);
//         return Promise.reject(error);
//     }

//     const { response } = error;

//     if (response.status == 401) {
//         window.location.href = '/home';
//     }
//     return Promise.reject(error);
// });

/* 권한이 없을 경우 사용함 (토큰 적용 안함)*/
const auth = axios.create({
    baseURL: API_URL,
    responseType: "json",
    withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json'
    // }
});

export default {
    request,
    auth,
    // file,
    isLocal
}