import HttpService from 'utils/http'

export const getAll = () => {
  let apiEndpoint = '/kien-thuc-nha-gos?populate=*&sort=createdAt:DESC';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getDetail = (id) => {
  let apiEndpoint = `/kien-thuc-nha-gos/${id}?populate=*`;
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}