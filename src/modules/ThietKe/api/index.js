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
  let apiEndpoint = '/thiet-ke-noi-thats?populate=img,mau_thiet_ke_noi_thats.img&sort=createdAt:DESC';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getThietKeNhaGoDetail = (id) => {
  let apiEndpoint = `/mau-thiet-ke-noi-thats/${id}?populate=*&sort=createdAt:DESC`;
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}
