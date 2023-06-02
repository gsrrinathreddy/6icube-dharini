import BasicCard from '../../BasicCard'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';  
import BasicTabs from '../../Tabs';
import ReviewCard from '../../ReviewCard';
import Accordions from '../../Accordions';

export default function Home(){
  
    const home=[
        {
            image:"https://houseofhens.com.au/assets/House-of-Hens/Destinations-HOH/7fb1db9f3d/brisbane-at-night__FocusFillWzk4NCw5ODQsIngiLDI0NV0.jpg",
            title:"Hot Brown Honey  THE REMIX",
            date:"May 25,2023",
            time:"11Am to 12Pm",
            location:"Australia"
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXUlQPdeC6QU8jYgSujjfx7D0mhwXCgzd5W8gcs1PxA&usqp=CAU&ec=48665699",
            title:"Hyderabads Biggest Weekend THEME PARTY",
            date:"May 16,2023",
            time:"11Am to 12Pm",
            location:"Opera House, Bennelong Point, Sydney NSW 2000, Australia"
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsQ6cyGQM_zqc4fVYP3tBa_0ytk234bAfoT6tDSZAzQ&usqp=CAU&ec=48665699",
            title:"Hot Brown Honey THE REMIX",
            date:"May 20,2023",
            time:"11Am to 12Pm",
            location:"Opera House, Bennelong Point, Sydney NSW 2000, Australia"
        }
    ]
    
    const review=[
        {
            date:"Posted on May 18, 2023",
            title:"Eventer...",
            image:"http://events2go.com.au/uploads/blog/post/devim_1407882437.jpg",
            description:"Reference site about Lorem..."
        },
        {
            date:"Posted on May 18, 2023",
            title:"First Speakers...",
            image:"http://events2go.com.au/uploads/blog/post/devim_2057839072.jpg",
            description:"Lorem ipsum is..."
        },
        {
            date:"Posted on May 17, 2023",
            title:"Eventer...",
            image:"http://events2go.com.au/uploads/blog/post/devim_854574434.jpg",
            description:"Quaerat neque purus ipsum neque..."
        }
    ]
    return(
        <>
        <img src="https://i.pinimg.com/originals/98/b4/ba/98b4badd7a28ed26191919e5dc60e856.jpg" width="1300" height="500"/>
       
         <Grid item xs={12} sx={{backgroundColor:"white",p: 4,marginLeft:"110px"}}>
    <Grid container spacing={0}>
        {
            home.map((home)=>{
                return <BasicCard image={home.image} title={home.title} date={home.date} time={home.time} location={home.location}/>
            })
        }
        </Grid>
        </Grid>
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          
            <img src="http://buzzitsolutions.com/events/assets/front/images/image-02.png" height="500" width="500"/>
        
        </Grid>
        <Grid xs={6}>
          <Typography variant="h7" color="magenta">
            ABOUT THE EVENTS2GO [ EVENTS MANAGER ]
          </Typography>
          <Typography variant="h5" color="gray" marginTop="20px" textAlign="justify">
            Welcome to Events2go Event Manager
          </Typography>
          <Typography variante="h7" marginBottom="30px" textAlign="justify">
            Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
          </Typography>
          <Button variant="contained" sx={{backgroundColor:"magenta"}}>
            Event Schedule</Button>
        </Grid>
        <Grid xs={6} sx={{backgroundColor:"black"}}>
          <Typography marginTop="150px" color="white">
          Creative, Engaged, Well-connected, Self-promoting and Reporting Event Organiser!
          </Typography>
        </Grid>
        <Grid xs={6}>
            <img src="https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=" width="500"/>
        </Grid>
      </Grid>
    </Box>
    <Grid sx={{marginTop:"80px",marginBottom:"80px"}}>
    <Typography variant='h4' color="gray">
     Trending Events       
    </Typography>
    <Typography variant='h6' margin="30px">
    Below you'll find the schedule for Events 2023. We'll keep this page regularly
    updated with all new events and sessions, so be sure to keep checking in!
    </Typography>
    </Grid>

     <BasicTabs/>

      <Grid>
        <Button variant='contained' sx={{backgroundColor:"magenta", marginTop:"40px",marginBottom:"40px"}}>
            Event Schedule
        </Button>
      </Grid>
      
      <img src="https://cff2.earth.com/uploads/2017/06/20152453/shutterstock_612941954.jpg" width="1400" height="500"/>
    <Typography variant='h4' marginTop="50px">
        Events for  every occation
    </Typography>
    <Typography variant='h4' marginTop="50px" color="purple">
    Diversity is our strength, we would like to bring people from all walks of life to work together
    </Typography>

    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}marginTop="10px">
        <Grid xs={3} backgroundColor="#b0bec5">
     <Typography variant='h6'color="purple">
        Free Events
     </Typography>
     <Typography>
        Standard Free 
     </Typography>
     <Typography>
     Applicable
     </Typography>
     </Grid>
     <Grid xs={3} backgroundColor="#b0bec5">
     <Typography variant='h6'color="purple">
        Standard
     </Typography>
     <Typography>
     5% + $1.00
     </Typography>
     <Typography>
     Per paid ticket
     </Typography>
     </Grid>
     <Grid xs={3} backgroundColor="#b0bec5" >
     <Typography variant='h6'color="purple">
        Charities
     </Typography>
     <Typography>
     2.5% + $0.50
      </Typography>
      <Typography>
      Per paid ticket
      </Typography>
     </Grid>
     <Grid xs={3} backgroundColor="#b0bec5" >
     <Typography variant='h6'color="purple">
        Custom
     </Typography>
     <Typography>
     Thinking big? Let's talk.
     </Typography>
     <Button variant='contained'>
        Contact Us
     </Button>
     </Grid>
    </Grid>
    <Typography variant='h6' color="gray" marginTop="70px">
    All plans include access to all features. Technology, Pricing, Customer Service, and Support will be provided.
    </Typography>
    <Typography variant='h5' marginBottom="100px">
    Quality Service and Customer first.
    </Typography>
    <Typography variant='h4'>
    Creative, Engaged, Well-connected, Self-promoting and 
    </Typography>
    <Typography variant='h4'>
    Reporting Event Organiser!
    </Typography>
    <Typography variant='h6' marginTop="10px">
    Customize your events with our design tools and event builder.
    </Typography>
    <Typography variant='h4' marginTop="100px">
    Our Reviews Latest News & Articles
    </Typography>
    <Typography variant='h6'>
    Events 2023 gathered the brightest minds globally. Explore new skills and
    </Typography>
    <Typography variant='h6'>
    attributes from our experts and practitioners.
    </Typography>

    <Grid item xs={12} sx={{backgroundColor:"#eeeeee",p: 4,margin:"110px"}}>
    <Grid container spacing={0}>
        {
            review.map((review)=>{
                return <ReviewCard title={review.title}  date={review.date} image={review.image} description={review.description}/>
            })
        }
        </Grid>
        </Grid>

        <Typography variant='h4' marginTop="100px" color="gray">
          Have Questions?Look Here 
        </Typography>
        <Typography variant='h6'>
        Events 2023 gathered the brightest minds in the tech world. Learn new skills and
        </Typography>
        <Typography variant='h6'>
        get insights from experts and practitioners from all around!
        </Typography>
        <Accordions/>

   
        </>
    )
}