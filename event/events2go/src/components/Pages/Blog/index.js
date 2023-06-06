import Grid from '@mui/material/Grid';
import BlogCard from '../../BlogCard';
import { IconButton, MenuItem, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

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
        <Grid container spacing={0}>
            
         <Grid item xs={7} sx={{backgroundColor:"white",p: 4,margin:"80px"}}>

        {
            blog.map((blog)=>{
                return <BlogCard title={blog.title}  date={blog.date} image={blog.image} description={blog.description}/>
            })
        }
        </Grid>
        
        <Grid xs={3}>
        
          <Typography variant='h5' color="purple" marginRight="300px" marginTop="150px">
            Categories 
          </Typography>

          <MenuItem>
          <Typography variant="inherit" marginTop="10px">
            Reviews(2)
            </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>         
          <Typography variant="inherit">
            Latest News (1)
            </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>        
          <Typography variant="inherit">
            Articals (1)
          </Typography>
          </MenuItem>

        </Grid>
      
        <Grid xs={2}>
        </Grid>
      
        </Grid>

   
        </>
    )
}