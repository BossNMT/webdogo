import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { getListImgSlider } from '../api';
import { APP_CONFIG } from 'utils/constants';

export default () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        handleCallApiGetImg();
    }, [])

    useEffect(() => {

    }, [data])

    const handleCallApiGetImg = () => {
        getListImgSlider()
            .then(res => setData(res.data.data))
    }

    return (
        <div style={{ borderBottom: '4px solid #f2d77d' }}>
            <Carousel autoplay>
                {data?.map((item, index) => {
                    return (
                        <div style={{ height: '50px' }} key={index}>
                            <img style={{ height: '100%' }} src={`${APP_CONFIG.dataUrl}${item.attributes.img.data.attributes.url}`} alt='Slider' />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}