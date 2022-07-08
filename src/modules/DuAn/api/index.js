import HttpService from 'utils/http'

export const getAll = () => {
  let apiEndpoint = '/list-du-ans?populate=*&sort=createdAt:DESC';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getDetail = (id) => {
  let apiEndpoint = `/list-du-ans/${id}?populate=*`;
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getDuAn = () => {
  let apiEndpoint = '/du-ans';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getSelect = (id) => {
  let apiEndpoint = `/du-ans/${id}?populate[list_du_ans][populate]=*&sort=createdAt:DESC`;
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}
