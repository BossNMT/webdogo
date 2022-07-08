import HttpService from 'utils/http'

export const getListImgSlider = () => {
  let apiEndpoint = '/img-slides?populate=*';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getInfoHome = () => {
  let apiEndpoint = '/gioi-thieus?populate=*';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getDanhHieu = () => {
  let apiEndpoint = '/danh-hieu-chung-nhans?populate=*';
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

export const getListDuAn = () => {
  let apiEndpoint = '/list-du-ans?populate=*&sort=createdAt:DESC';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getListKỉenThuc = () => {
  let apiEndpoint = '/kien-thuc-nha-gos?populate=*&sort=createdAt:DESC';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}
