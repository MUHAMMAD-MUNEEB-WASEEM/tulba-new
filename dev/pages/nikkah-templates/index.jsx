import Banner from 'modules/nikkah_template/Banner';
import Wedcard from 'modules/nikkah_template/Wedcard';
import React from 'react';
import Footer from "layout/footer";
import Header from "layout/header";

const Store = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Wedcard />
            <Footer />
        </div>
    );
};

export default Store;