// Banner.jsx
import React from 'react';
import BannerTitle from './pagetitle';

const Banner = ({ title, imageUrl }) => {
    const styles = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
    };

    return (
        <section className="sect-banner" style={styles}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <BannerTitle title={title} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
