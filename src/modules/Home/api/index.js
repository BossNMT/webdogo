import HttpService from 'utils/http'

export const getListImgSlider = () => {
  let apiEndpoint = '/silders?populate=*';
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
  let apiEndpoint = '/du-an-hoan-thiens?populate=*&sort=createdAt:DESC';
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

export const getListMauThietKe = () => {
  let apiEndpoint = '/mau-thiet-ke-noi-thats?populate=*&sort=createdAt:DESC';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}

export const getListTuVan = () => {
  let apiEndpoint = '/kinh-nghiems?populate=*&sort=createdAt:DESC';
  return HttpService.get(apiEndpoint).then(res => {
    return res || {}
  }).catch(() => { return false });
}
