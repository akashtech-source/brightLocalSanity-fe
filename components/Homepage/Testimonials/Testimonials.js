import { Grid } from "@material-ui/core";
import { Typography, makeStyles } from "@material-ui/core";
import Image from "next/image";
import user1 from '../../../public/casey-meraz-headshot-300x300-1.png';
import user2 from '../../../public/S.-Hallam-002.jpg';
import user3 from '../../../public/mike-ramsey.jpeg';
import quote from '../../../public/quote_marks.svg';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient, urlFor } from "../../../sanity";

const useStyles = makeStyles({
    text: {
        fontWeight: 700,
        marginTop: 20,
        color: 'grey'
    }
})

const Testimonials = ({section4}) => {
    console.log(section4);

    // 1st col
    const quote1 = section4[2].quote
    const name1 = section4[2].name
    const position1 = section4[2].position
    const image1 = section4[2].userImage
    // 2nd col
    const quote2 = section4[1].quote
    const name2 = section4[1].name
    const position2 = section4[1].position
    const image2 = section4[1].userImage
    // 3rd col
    const quote3 = section4[0].quote
    const name3 = section4[0].name
    const position3 = section4[0].position
    const image3 = section4[0].userImage

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
    const classes =useStyles();

    return (
        <div style={{position: 'relative', left: '150px', top: '100px'}}>
            <Grid container spacing={3}>
                <Grid item lg={3}>
                    <div><Image {...firstImage} alt="user 1"></Image></div>
                    <div className="bg-container">
                        <div className="testimonial-text">
                            <Image src={quote} alt="quote"></Image> 
                            <Typography className={classes.text}>
                            {quote3}
                            </Typography>
                            <div className="user-data">
                            <small>{name1}</small>
                            <Typography className={classes.text}>{position1}</Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div><Image {...secondImage} alt="user 1"></Image></div>
                    <div className="bg-container">
                        <div className="testimonial-text">
                            <Image src={quote} alt="quote"></Image> 
                            <Typography className={classes.text}>
                            {quote2}
                            </Typography>
                            <div className="user-data">
                            <small>{name2}</small>
                            <Typography className={classes.text}>{position2}</Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3}>
                    <div><Image {...thirdImage} alt="user 1"></Image></div>
                    <div className="bg-container">
                        <div className="testimonial-text">
                            <Image src={quote} alt="quote"></Image> 
                            <Typography className={classes.text}>
                            {quote3}
                            </Typography>
                            <div className="user-data">
                            <small>{name3}</small>
                            <Typography className={classes.text}>{position3}</Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Testimonials;