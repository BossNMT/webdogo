import HttpService from 'utils/http'

export const getInfoHome = () => {
  let apiEndpoint = '/kinh-nghiems?populate=*&sort=createdAt:DESC';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getDetail = (id) => {
  let apiEndpoint = `/kinh-nghiems/${id}?populate=*`
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}
