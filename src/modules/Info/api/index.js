import HttpService from 'utils/http'

export const getInfoHome = () => {
  let apiEndpoint = '/gioi-thieus?populate=*';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}
