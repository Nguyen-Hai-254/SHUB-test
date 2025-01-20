import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from '../styles/swiper.module.css';

import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Box, Button, Container } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const imgSwiper = [
    {
        src: '/img/carousel1.png',
        alt: 'Carousel 1'
    },
    {
        src: '/img/carousel2.png',
        alt: 'Carousel 2'
    },
    {
        src: '/img/carousel3.png',
        alt: 'Carousel 3'
    },
    {
        src: '/img/carousel4.png',
        alt: 'Carousel 4'
    },
    {
        src: '/img/carousel5.png',
        alt: 'Carousel 5'
    },
    {
        src: '/img/carousel6.png',
        alt: 'Carousel 6'
    },
    {
        src: '/img/carousel1.png',
        alt: 'Carousel 1'
    },
    {
        src: '/img/carousel2.png',
        alt: 'Carousel 2'
    },
    {
        src: '/img/carousel3.png',
        alt: 'Carousel 3'
    },
    {
        src: '/img/carousel4.png',
        alt: 'Carousel 4'
    },
    {
        src: '/img/carousel5.png',
        alt: 'Carousel 5'
    },
    {
        src: '/img/carousel6.png',
        alt: 'Carousel 6'
    },
]

export default function MySwiper() {
    return (
        <>
            <Box>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={32}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        }
                    }}
                    freeMode={true}
                    loop={true}
                    pagination={false}
                    navigation={{
                        nextEl: `.${styles.customNext}`,
                        prevEl: `.${styles.customPrev}`,
                    }}
                    modules={[FreeMode, Pagination, Navigation]}
                    // className={styles.my_swiper}
                    wrapperClass={styles.my_swiper}
                >
                    {imgSwiper.map((img, index) => {
                        if (index % 2 === 0)
                            return (
                                <SwiperSlide key={index} className={styles['swiper-slide']}>
                                    <Box sx={{ height: '100%', position: 'relative', top: '0', width: '100%' }}>
                                        <Image
                                            aria-hidden
                                            src={img.src}
                                            alt={img.alt}
                                            width={100}
                                            height={360}
                                        />
                                    </Box>
                                </SwiperSlide>
                            )
                        else
                            return (
                                <SwiperSlide key={index} className={styles['swiper-slide']}>
                                    <Box sx={{ height: '100%', position: 'relative', top: '-30px', width: '100%' }}>
                                        <Image
                                            aria-hidden
                                            src={img.src}
                                            alt={img.alt}
                                            width={100}
                                            height={360}
                                        />
                                    </Box>
                                </SwiperSlide>
                            )
                    })}
                    <Button className={styles.customPrev}>
                        <ArrowBackOutlinedIcon sx={{ color: '#000' }} />
                    </Button>
                    <Button className={styles.customNext}>
                        <ArrowForwardOutlinedIcon sx={{ color: '#000' }} />
                    </Button>
                </Swiper>
            </Box>
        </>
    );
}
