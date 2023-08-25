'use client'
import React from 'react'
import { Col, Row } from 'reactstrap'
import "./product.css"
import { BiCaretLeft } from "react-icons/bi";
import Image from 'next/image';

const Product: React.FC = () => {
    return (
        <React.Fragment>
            <div className='container-fluid base-1'>
                <Row>
                    <Col>
                        <div className='px-1 py-2 d-flex'>
                            <BiCaretLeft />
                            <h1> Product List</h1>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='container-fluid base-2'>
                <Row>
                    <Col>
                        <div className='px-5 py-4 d-flex'>
                            <h1> Featured Product</h1>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="base-1">
                <div className='overflow-x-scroll px-5 py-5' style={{ width: '100%' }}>
                    <div className='flex'>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="relative group mx-3" style={{ width: 100, height: 100 }}>
                                <Image
                                    src='/assets/images/games/icon3.webp'
                                    alt='img'
                                    className="icon-games"
                                    width={100}
                                    height={100}
                                />
                                <div className="hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 text-white justify-center items-end">
                                    <div className="py-4">Genshin Impact</div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Product