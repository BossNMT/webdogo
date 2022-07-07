import HttpService from 'utils/http'

export const getInfoHome = () => {
  let apiEndpoint = '/gioi-thieus?populate=*';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getGiaiThuong = () => {
  let apiEndpoint = '/danh-hieu-chung-nhans?populate=*';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getStep = () => {
  let apiEndpoint = '/chang-duong-phat-triens?populate=*';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getDoiNgu = () => {
  let apiEndpoint = '/doi-ngu-nhan-viens?populate=*';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getKhachHang = () => {
  let apiEndpoint = '/khach-hang-cmts?populate=*';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}
