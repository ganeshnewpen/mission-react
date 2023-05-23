import React from 'react';

function Landing() {
    const imageUrl = 'https://img.freepik.com/free-photo/globe-technology-business-with-gradient-wallpaper_53876-97642.jpg?w=826&t=st=1683388481~exp=1683389081~hmac=39367f27b8171d1e6c7234e4007bdef98b1fa0fb517ae1103b57b9f207eb6cbd';

    const styles = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        animation: 'rotate 10s linear infinite',
      };    return (
        <section className="sect-landing d-flex flex-column justify-content-center min-vh-100">
            <div className="overlay" style={styles}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Hi! I am Ganesh Neupane</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Landing;
