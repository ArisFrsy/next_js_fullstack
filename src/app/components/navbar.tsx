import React from 'react'
import Logo from '../../assets/images/logo/logo.png'
import Image from 'next/image'
import { BiUserCircle } from "react-icons/bi";
import "./navbar.css"
import Link from 'next/link'

const Navbar: React.FC = () => {


    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid navbar-item">
                <Image
                    className='logo-images'
                    src='/assets/images/logo/logo.png'
                    alt="logo"
                    width={200}
                    height={200}
                />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="text-sm lg:flex-grow text-center">
                    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-lg mr-4">
                        Home
                    </Link>
                    <Link href="/product" className="block mt-4 lg:inline-block lg:mt-0  hover:text-teal-200 text-lg mr-4">
                        Produk
                    </Link>
                    <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  hover:text-teal-200 text-lg mr-4">
                        Testimoni
                    </Link>
                    <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  hover:text-teal-200 text-lg">
                        Hubungi Kami
                    </Link>
                </div>
                <div className="d-flex align-items-center sigin">
                    <BiUserCircle className="user-icon" />
                    <button className="btn text-white" type="submit">
                        Masuk
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar