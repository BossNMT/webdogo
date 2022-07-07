import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import { getInfoHome, getGiaiThuong, getStep, getDoiNgu, getKhachHang } from '../api';
import { APP_CONFIG } from 'utils/constants';
import '../styles/index.scss';
import { Steps } from 'antd';
import stepImg from 'assets/images/step.png';
import doinguImg from 'assets/images/home-video-background.png';

const { Step } = Steps;

export default () => {
    const [info, setInfo] = useState()
    const [danhHieu, setDanhHieu] = useState()
    const [step, setStep] = useState()
    const [doingu, setDoiNgu] = useState()
    const [khachHang, setKhachHang] = useState()
    useEffect(() => {
        handleCallApiInfo()
        handleCallApiDanhHieu()
        handleCallApiStep()
        handleCallApiDoiNgu()
        handleCallApiKhachHang()
    }, [])

    const handleCallApiInfo = () => {
        getInfoHome()
            .then(res => {
                setInfo(res.data.data[0].attributes)
            })
    }

    const handleCallApiDanhHieu = () => {
        getGiaiThuong()
            .then(res => {
                setDanhHieu(res.data.data)
            })
    }

    const handleCallApiStep = () => {
        getStep()
            .then(res => {
                setStep(res.data.data)
            })
    }

    const handleCallApiDoiNgu = () => {
        getDoiNgu()
            .then(res => {
                setDoiNgu(res.data.data)
            })
    }

    const handleCallApiKhachHang = () => {
        getKhachHang()
            .then(res => {
                setKhachHang(res.data.data)
            })
    }

    return (
        <>
            <Breadcrumb title="GIỚI THIỆU" subTitle="GIỚI THIỆU" />
            <div className="Info">
                <h1 className='title'>TINH HOA TỪ TRUYỀN THUYẾT</h1>
                <h3 className='subTitle'>CÔNG TRÌNH MANG Ý NGHĨA ĐỜI NGƯỜI</h3>
                <div className='Info__content' dangerouslySetInnerHTML={{ __html: info?.content }}></div>
                <div className='Info__GiaiThuong'>
                    <h3>GIẢI THƯỞNG & CHỨNG NHẬN</h3>
                    <div className='d-flex justify-content-between' style={{ flexWrap: 'wrap' }}>
                        {danhHieu?.map((item, index) => {
                            return (
                                <div key={index} className='Info__GiaiThuong__item'>
                                    <div className='img'>
                                        <img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt='Danh Hieu' />
                                    </div>
                                    <div className='info'>
                                        <h4>{item.attributes.title}</h4>
                                        <p>{item.attributes.subTitle}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='Info__Step'>
                    <h2>CHẶNG ĐƯỜNG PHÁT TRIỂN</h2>
                    <img src={stepImg} alt="Ảnh phát triển" />
                    <div className='step'>
                        <Steps progressDot current={100} direction="vertical">
                            {step?.map((item, index) => {
                                return (
                                    <Step key={index} title={item.attributes.title} description={item.attributes.subTitle} />
                                )
                            })}
                        </Steps>
                    </div>
                </div>
            </div>
            <div className='Info__DoiNgu full-width d-flex-center' style={{ background: `url("${doinguImg}")` }}>
                <div className='Info__DoiNgu__info'>
                    <h2 style={{ textTransform: 'uppercase' }}>ĐỘI NGŨ CỦA CHÚNG TÔI</h2>
                    <div className='Info__DoiNgu__info__list'>
                        {doingu?.map((item, index) => {
                            if (index < 3) {
                                return (
                                    <div key={index} className='item'>
                                        <div className='item__img'>
                                            <img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt='Doi Ngu' />
                                        </div>
                                        <div className='item__info'>
                                            <h3>{item.attributes.title}</h3>
                                            <p>{item.attributes.subTitle}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className='Info__KhachHang'>
                <h2>KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h2>
                <div className='Info__KhachHang__list'>
                    {khachHang?.map((item, index) => {
                        if (index < 2) {
                            return (
                                <div key={index} className='item'>
                                    <p>{item.attributes.content}</p>
                                    <div className='item__info'>
                                        <img src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt='Khach Hang' />
                                        <div className='item__info__name'>
                                            <h4>{item.attributes.name}</h4>
                                            <p>{item.attributes.subName}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}