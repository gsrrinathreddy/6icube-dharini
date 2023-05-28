import Grid from '@mui/material/Grid';
import BlogCard from '../../BlogCard';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Typography } from '@mui/material';
export default function Blog(){
    const blog=[
        {
            date:"Posted on May 18, 2023",
            title:"Randon Pexson, Eventer’s CEO, announced as headliner of the Eventer Conference 2022",
            image:"http://events2go.com.au/uploads/blog/post/devim_1407882437.jpg",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining..."
        },
        {
            date:"Posted on May 18, 2023",
            title:"Eventer Careers: Top 4 tips to get your foot in the door",
            image:"http://events2go.com.au/uploads/blog/post/devim_2057839072.jpg",
            description:"Reference site about Lorem Ipsum, giving information on its origins, as well as a random..."
        },
        {
            date:"Posted on May 18, 2023",
            title:"First Speakers of Eventry Conference 2023 announced!",
            image:"http://events2go.com.au/uploads/blog/post/devim_854574434.jpg",
            description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing..."
        },
        {
            date:"Posted on May 17, 2023",
            title:"Eventer Careers: Top 4 tips to get your foot in the door",
            image:"http://events2go.com.au/uploads/blog/post/devim_1335223258.png",
            description:"Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida..."
        }
    ]
    return(
        <>
         <Grid item xs={12} sx={{backgroundColor:"white",p: 4,margin:"80px"}}>
    <Grid container spacing={0}>
        {
            blog.map((blog)=>{
                return <BlogCard title={blog.title}  date={blog.date} image={blog.image} description={blog.description}/>
            })
        }
        </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
     <Grid xs={3} >
     <Typography variant='h6'color="gray" marginTop="60px">
     Find events
     </Typography>
     <Typography>
     Search events
     </Typography>
     </Grid>
     <Grid xs={3}>
     <Typography variant='h6'color="gray" marginTop="60px">
     Host events
     </Typography>
     <Typography>
     All features
     </Typography>
     <Typography>
     Pricing
     </Typography>
     <Typography>
     FAQs
     </Typography>
     </Grid>
     <Grid xs={3}>
     <Typography variant='h6'color="gray" marginTop="60px">
     Get in touch
     </Typography>
     <Typography>
     Help
      </Typography>
      <Typography>
      Contact us
      </Typography>
     </Grid>
     <Grid xs={3}>
     <Typography variant='h6'color="gray" marginTop="60px">
     Follow us on
     </Typography>
     <IconButton>
     <FacebookIcon/><Avatar marginBottom="10px">in</Avatar>
     </IconButton>
     </Grid>
    </Grid>

    <Grid xs={12} marginRight="850px" marginTop="100px">
        <Typography>
        © Copyright Events2go. All Rights Reserved
        </Typography>
    </Grid>
        </>
    )
}