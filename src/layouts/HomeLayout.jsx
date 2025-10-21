import React from 'react';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <main className="left-nav w-11/12 mx-auto my-3 *:border grid grid-cols-12">
                    <section className="left-nav col-span-3 ">
                      <LeftAside></LeftAside>
                    </section>
                    <section className="main col-span-6 ">
                       <Outlet></Outlet>
                    </section>
                    <section className="left-nav col-span-3 ">
                      <RightAside></RightAside>
                    </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default HomeLayout;