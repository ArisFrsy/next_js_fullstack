'use client'
import React, { useState, useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import './home.css'
import Image from 'next/image'

type dataPost = {
    id: number
    title?: string
    content?: string
    published?: boolean
    authorId?: number
}

const Home: React.FC = () => {
    const [data, setData] = useState<dataPost>()

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow' as RequestRedirect
        };

        fetch("http://localhost:3000/api/posts/posts", requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
            .catch(error => {
                console.log('error', error)
            });
    }, [])

    console.log(data)

    return (
        <React.Fragment>
            <div className='container-fluid home py-5'>
                <Row>
                    <Col className='text-home'>
                        <p className='home-1'>Berdiri sejak 2023</p>
                        <p className='home-2'>Tempat Top Up yang <span className='home-2-1'>Terpercaya</span> sejak zaman majapahit</p>
                        <p className='home-3'>Kami selalu mencoba melakukan yang terbaik untuk memberikan rasa puas
                            dan menumbuhkan rasa percaya untuk melakukan transaksi dengan store kami.</p>
                    </Col>
                </Row>
            </div>
            <div className='container-fluid home2 py-5'>
                <Row>
                    <Col className='text-home'>
                        <p className='home-4'>Produk yang sedang promo :</p>
                    </Col>
                </Row>
                <Row className='text-home'>
                    <Col xl={3} className="my-3 grid-icon">
                        <Image
                            src='/assets/images/games/icon1.webp'
                            alt='img'
                            className="icon-games"
                            width={500}
                            height={500}
                        />
                    </Col>
                    <Col xl={3} className="my-3 grid-icon">
                        <Image
                            src='/assets/images/games/icon2.png'
                            alt='img'
                            className="icon-games"
                            width={500}
                            height={500}
                        />
                    </Col>
                    <Col xl={3} className="my-3 grid-icon">
                        <Image
                            src='/assets/images/games/icon3.webp'
                            alt='img'
                            className="icon-games"
                            width={500}
                            height={500}
                        />
                    </Col>
                    <Col xl={3} className="my-3 grid-icon">
                        <Image
                            src='/assets/images/games/icon4.png'
                            alt='img'
                            className="icon-games"
                            width={500}
                            height={500}
                        />
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Home