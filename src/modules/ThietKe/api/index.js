import HttpService from 'utils/http'

// export const getAll = () => {
//   let apiEndpoint = '/san-pham-mau-nha-gos?populate=*&sort=createdAt:DESC';
//   return HttpService.get(apiEndpoint).then(res => {
//     return res || {}
//   }).catch(() => { return false });
// }

// export const getDetail = (id) => {
//   let apiEndpoint = `/san-pham-mau-nha-gos/${id}?populate=*`;
//   return HttpService.get(apiEndpoint).then(res => {
//     return res || {}
//   }).catch(() => { return false });
// }

// export const getMauNhaGo = () => {
//   let apiEndpoint = '/mau-nha-gos';
//   return HttpService.get(apiEndpoint).then(res => {
//     return res || {}
//   }).catch(() => { return false });
// }

// export const getSelect = (id) => {
//   let apiEndpoint = `/mau-nha-gos/${id}?populate[san_pham_mau_nha_gos][populate]=*&sort=createdAt:DESC`;
//   return HttpService.get(apiEndpoint).then(res => {
//     return res || {}
//   }).catch(() => { return false });
// }

export const getThietKeNhaGo = () => {
  let apiEndpoint = '/thiet-ke-noi-thats?populate=*&sort=createdAt:DESC';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}
