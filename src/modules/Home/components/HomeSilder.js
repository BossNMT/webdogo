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
            .then(res => setData(res.data.data[0].attributes.img.data))
    }

    return (
        <Carousel autoplay style={{ marginTop: '16px' }}>
            {data?.map((item, index) => {
                return (
                    <div style={{ height: '50px' }} key={index}>
                        <img style={{ height: '100%' }} src={`${APP_CONFIG.dataUrl}${item.attributes.url}`} alt='Slider' />
                    </div>
                )
            })}
        </Carousel>
    )
}