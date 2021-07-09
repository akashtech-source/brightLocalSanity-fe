import { Grid } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import fivestar from '../../../public/Stars_4.5-1.png';
import fivestar8 from '../../../public/Stars_4.8-1.png';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient, urlFor } from "../../../sanity";

const CompanyStar = ({section5}) => {
    const {referenceList} = section5[0];

    const image1 = useNextSanityImage(
        sanityClient,
        referenceList[0],
    );
    const image2 = useNextSanityImage(
        sanityClient,
        referenceList[1],
    );
    const image3 = useNextSanityImage(
        sanityClient,
        referenceList[2],
    );
    const image4 = useNextSanityImage(
        sanityClient,
        referenceList[3],
    );
    return (
        <div style={{marginTop: '100px'}}>
            <Grid container>
                <Grid item lg={3}>
                    <div style={{textAlign: 'center'}}>
                    <Image {...image4} alt="leader" height="120px" width="250px"></Image>
                    <Image src={fivestar} alt="4.5 star" height="25px" width="180px"></Image>
                    <p style={{fontSize: '19px'}}><span style={{fontWeight: 700}}>4.5 stars</span> out of 5</p>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div style={{textAlign: 'center'}}>
                    <Image {...image3} alt="leader" height="120px" width="250px"></Image>
                    <Image src={fivestar8} alt="4.5 star" height="25px" width="180px"></Image>
                    <p style={{fontSize: '19px'}}><span style={{fontWeight: 700}}>4.8 stars</span> out of 5</p>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div style={{textAlign: 'center'}}>
                    <Image {...image2} alt="leader" height="110px" width="200px"></Image>
                    <Image src={fivestar8} alt="4.5 star" height="25px" width="180px"></Image>
                    <p style={{fontSize: '19px'}}><span style={{fontWeight: 700}}>4.8 stars</span> out of 5</p>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div style={{textAlign: 'center'}}>
                    <Image {...image1} alt="leader" height="110px" width="200px"></Image>
                    <Image src={fivestar8} alt="4.5 star" height="25px" width="180px"></Image>
                    <p style={{fontSize: '19px'}}><span style={{fontWeight: 700}}>4.5 stars</span> out of 5</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default CompanyStar;