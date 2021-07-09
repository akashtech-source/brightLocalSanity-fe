import React from 'react';
import Image from 'next/image';
import heroImg from '../../../public/SEO-Tools-BrightLocal (1).png';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient, urlFor } from "../../../sanity";
import hilton from '../../../public/hilton-1.png';
import ikea from '../../../public/ikea.png';
import nandos from '../../../public/nandos.png';
import valvo from '../../../public/valvoline-1.png';
import roto from '../../../public/roto-rooter.png';
import iPropspect from '../../../public/iprospect.png';

const useStyles = makeStyles({
    heroTxt: {
        marginTop: '80px',
        fontWeight: 600,
    },
    allImg: {
        marginTop: 50,
    }
})

const HeroImage = ({section1}) => {
    const {referenceList} = section1[0];
    console.log(section1);
    const classes = useStyles();

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
    const image5 = useNextSanityImage(
        sanityClient,
        referenceList[4],
    );
    const image6 = useNextSanityImage(
        sanityClient,
        referenceList[5],
    );

    return (
        <div className="hero-image" style={{textAlign: 'center', marginTop: '40px'}}>
            <Image className={classes.img} src={heroImg} alt="hero-image"></Image>
            <Typography
            variant="h5"
            className= {classes.heroTxt}
            >
            Trusted by top brands, local businesses, and agencies alike
            </Typography>
            <Grid container
            className={classes.allImg}
            >
                {/* Dynamic Part */}
                
                <Grid item lg={2}>
                    <Image {...image1} alt="hilton"></Image> 
                </Grid>
                <Grid item lg={2}>
                    <Image {...image2} alt="hilton"></Image>
                </Grid>
                <Grid item lg={2}>
                    <Image {...image3} alt="hilton"></Image> 
                </Grid>
                <Grid item lg={2}>
                    <Image {...image4} alt="hilton"></Image> 
                </Grid>
                <Grid item lg={2}>
                    <Image {...image5} alt="hilton"></Image> 
                </Grid>
                <Grid item lg={2}>
                    <Image {...image6} alt="hilton"></Image> 
                </Grid>
            </Grid>
        </div>
    );
};

export default HeroImage;