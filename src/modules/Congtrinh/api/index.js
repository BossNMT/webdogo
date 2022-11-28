import HttpService from 'utils/http';

export const getThietKeNhaGo = () => {
  let apiEndpoint = '/sample-du-an-hoan-thiens?populate=img,du_an_hoan_thiens.img&sort=createdAt:DESC';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getThietKeNhaGoDetail = (id) => {
  let apiEndpoint = `/du-an-hoan-thiens/${id}?populate=*&sort=createdAt:DESC`;
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}
