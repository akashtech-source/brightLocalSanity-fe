import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import headerImg from '../../../public/Header_Image-1.png';
import headerImg2 from '../../../public/lsg-graphic-dots-2x.png';
import headerImg3 from '../../../public/LSA_Image_3_Updated.png';
import headerImg4 from '../../../public/GMB_Image_3.png';
import headerImg5 from '../../../public/CT_Header.png';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient, urlFor } from "../../../sanity";


const Service = ({section3}) => {
    console.log(section3);

    // grid one
    const title1 = section3[4].title
    const slogan1 = section3[4].slogan
    const bullet1 = section3[4].bullet1
    const bullet2 = section3[4].bullet2
    const bullet3 = section3[4].bullet3
    const bullet4 = section3[4].bullet4
    const image1 = section3[4].userImage

    // grid two
    const title2 = section3[3].title
    const slogan2 = section3[3].slogan
    const bullet5 = section3[3].bullet1
    const bullet6 = section3[3].bullet2
    const bullet7 = section3[3].bullet3
    const bullet8 = section3[3].bullet4
    const image2 = section3[3].userImage

    // grid Three
    const title3 = section3[2].title
    const slogan3 = section3[2].slogan
    const bullet9 = section3[2].bullet1
    const bullet10 = section3[2].bullet2
    const bullet11 = section3[2].bullet3
    const bullet12 = section3[2].bullet4
    const image3 = section3[2].userImage

    // grid four
    const title4 = section3[1].title
    const slogan4 = section3[1].slogan
    const bullet13 = section3[1].bullet1
    const bullet14 = section3[1].bullet2
    const bullet15 = section3[1].bullet3
    const bullet16 = section3[1].bullet4
    const image4 = section3[1].userImage

    // grid five
    const title5 = section3[5].title
    const slogan5 = section3[5].slogan
    const bullet17 = section3[5].bullet1
    const bullet18 = section3[5].bullet2
    const bullet19 = section3[5].bullet3
    const bullet20 = section3[5].bullet4
    const image5 = section3[5].userImage

    const firstImage = useNextSanityImage(
        sanityClient,
        image1,
    );

    const secondImage = useNextSanityImage(
        sanityClient,
        image2,
    );

    const thirdImage = useNextSanityImage(
        sanityClient,
        image3,
    );

    const fourthImage = useNextSanityImage(
        sanityClient,
        image4,
    );

    const fifthImage = useNextSanityImage(
        sanityClient,
        image5,
    );
    return (
        <div style={{padding: '100px'}}>
            {/* 1st row */}
            <Grid container>
                <Grid item lg={6} style={{marginTop: '50px'}}>
                    <h4
                    style={{color: '#A5C559', marginLeft: '20px'}}
                    >
                    {title1}
                    </h4>
                    <h2
                    style={{ marginLeft: '20px'}}
                    >{slogan1}</h2>
                    <ul>
                        <li><h4>{bullet1}</h4></li>
                        <li><h4>{bullet2}</h4></li>
                        <li><h4>{bullet3}</h4></li>
                        <li><h4>{bullet4}</h4></li>
                    </ul>
                    <button
                    style={{width: '300px', height: '50px', marginLeft: '25px'}}
                     className="btn-brand">
                        START YOUR 14 DAY FREE TRIAL
                    </button>
                </Grid>
                <Grid item lg={6}>
                    <Image {...firstImage} alt="header-image"></Image>
                </Grid>
            </Grid>
            {/* 2nd row */}
            <Grid container style={{marginTop: '150px'}}>
                <Grid item lg={6}>
                <Image {...secondImage} alt="header-image"></Image>
                </Grid>
                <Grid item lg={6}>
                <h4
                    style={{color: '#A5C559', marginLeft: '20px'}}
                    >
                    {title2}
                    </h4>
                    <h2
                    style={{ marginLeft: '20px'}}
                    >{slogan2}</h2>
                    <ul>
                        <li><h4>{bullet5}</h4></li>
                        <li><h4>{bullet6}</h4></li>
                        <li><h4>{bullet7}</h4></li>
                        <li><h4>{bullet8}</h4></li>
                    </ul>
                    <button
                    style={{width: '300px', height: '50px', marginLeft: '25px'}}
                     className="btn-brand">
                        START YOUR 14 DAY FREE TRIAL
                    </button>
                    
                </Grid>
            </Grid>

            {/* 3rd row */}
            <Grid container style={{marginTop: '150px'}}>
                <Grid item lg={6}>
                    <h4
                    style={{color: '#A5C559', marginLeft: '20px'}}
                    >
                    {title3}
                    </h4>
                    <h2
                    style={{ marginLeft: '20px'}}
                    >{slogan3}</h2>
                    <ul>
                        <li><h4>{bullet9}</h4></li>
                        <li><h4>{bullet10}</h4></li>
                        <li><h4>{bullet11}</h4></li>
                        <li><h4>{bullet12}</h4></li>
                    </ul>
                    <button
                    style={{width: '300px', height: '50px', marginLeft: '25px'}}
                     className="btn-brand">
                        START YOUR 14 DAY FREE TRIAL
                    </button>
                </Grid>
                <Grid item lg={6}>
                    <Image {...thirdImage} alt="header-image"></Image>
                </Grid>
            </Grid>
            {/* 4th row */}
            <Grid container style={{marginTop: '150px'}}>
                <Grid item lg={6}>
                <Image {...fourthImage} alt="header-image"></Image>
                </Grid>
                <Grid item lg={6}>
                <h4
                    style={{color: '#A5C559', marginLeft: '20px'}}
                    >
                    {title4}
                    </h4>
                    <h2
                    style={{ marginLeft: '20px'}}
                    >{slogan4}</h2>
                    <ul>
                        <li><h4>{bullet13}</h4></li>
                        <li><h4>{bullet14}</h4></li>
                        <li><h4>{bullet15}</h4></li>
                        <li><h4>{bullet16}</h4></li>
                    </ul>
                    <button
                    style={{width: '300px', height: '50px', marginLeft: '25px'}}
                     className="btn-brand">
                        START YOUR 14 DAY FREE TRIAL
                    </button>
                    
                </Grid>
            </Grid>
            {/* 5th row */}
            <Grid container style={{marginTop: '150px'}}>
                <Grid item lg={6}>
                    <h4
                    style={{color: '#A5C559', marginLeft: '20px'}}
                    >
                    {title5}
                    </h4>
                    <h2
                    style={{ marginLeft: '20px'}}
                    >{slogan5}</h2>
                    <ul>
                        <li><h4>{bullet17}</h4></li>
                        <li><h4>{bullet18}</h4></li>
                        <li><h4>{bullet19}</h4></li>
                        <li><h4>{bullet20}</h4></li>
                    </ul>
                    <button
                    style={{width: '300px', height: '50px', marginLeft: '25px'}}
                     className="btn-brand">
                        START YOUR 14 DAY FREE TRIAL
                    </button>
                </Grid>
                <Grid item lg={6}>
                    <Image {...fifthImage} alt="header-image"></Image>
                </Grid>
            </Grid>
        </div>
    );
};

export default Service;