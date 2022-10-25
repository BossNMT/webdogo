import HttpService from 'utils/http'

export const getThietKeNhaGo = () => {
  let apiEndpoint = '/phong-caches?populate=img,mau_thiet_ke_noi_thats.img&sort=createdAt:DESC';
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
