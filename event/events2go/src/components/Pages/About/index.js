import { Typography,IconButton } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function About(){

    return(
        <>
        <Typography variant="h5" marginRight="1200px" marginTop="50px">
            About Us
        </Typography>

    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={1}>

        </Grid>
        <Grid xs={5} marginTop="70px" >
          <img src="http://buzzitsolutions.com/events/assets/front/images/image-06.png"/>
        </Grid>
        <Grid xs={5} marginTop="200px">
          <Typography variant="button text" color="magenta" textAlign="justify" marginRight="240px">
          ABOUT THE EVENTS2GO [ EVENTS MANAGER ]
          </Typography>
          <Typography textAlign="justify" marginTop="40px">
          Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
          </Typography>
        </Grid>
        <Grid xs={1}>

        </Grid>
        <Grid xs={1}>

        </Grid>
        <Grid xs={5} marginTop="40px">
          <Typography variant="h5" color="purple" textAlign="justify">
          Why Events2go is essential for Corporates, Governments and Not-for-profit sectors?
          </Typography>
        
          <Typography textAlign="justify" marginTop="10px">
            <StarBorderIcon/>
            Remotely working Employee well-being has become crucial in terms of productivity and hence online engagement is the only game changer to identify employee well-being and performance management support.
          </Typography>
          <Typography textAlign="justify" marginTop="10px">
            <StarBorderIcon/>
            Not-for-profits often find it difficult to organise webinars, online charity and fundraising events due to limited IT resources and financial requirements.
          </Typography>
          <Typography textAlign="justify" marginTop="10px">
            <StarBorderIcon/>
            Organising events more efficiently and effectively through monitoring mechanism that registers the RSVPs, feedback and issuing ticketing   
          </Typography>
        </Grid>
        <Grid xs={5}>
          <img src="https://newsvoir.com/images/article/image2/12599_ppi.jpg"/>
        </Grid>
      </Grid>
      <Grid xs={1}>

      </Grid>

      <Typography variant="h5" marginTop="50px">
        Key Features
      </Typography>
   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>   
    <Grid xs={1}>
      </Grid>  
<Grid xs={4}>
  <Typography variant="h5" color="purple" marginTop="50px" textAlign="justify">
  Easy Event creation for the purposes of Registration & Check-in
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Helps in developing custom registration forms
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Secure important attendee information
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Generates QR codes for quick scanning and onsite check-ins
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Assist people with the option to self-check in within the app
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Easily track attendance rates in real-time
  </Typography>
</Grid>
<Grid xs={1}>
</Grid>
<Grid xs={1}>

      </Grid>  
<Grid xs={4}>
  <Typography variant="h5" color="purple" marginTop="50px" textAlign="justify">
  Engagement
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Accessible Live streaming or virtual presentations through Events2go App
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Businesses can gain more visibility through Events2go in-App exhibit booths
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Publish multimedia content for easy download
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Set up live polls, Q&A sessions and leader-boards for attendees
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Display job boards and product listings
  </Typography>
</Grid>
<Grid xs={1}>
</Grid>
</Grid>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>   
    <Grid xs={1}>
      </Grid>  
<Grid xs={4}>
  <Typography variant="h5" color="purple" marginTop="50px" textAlign="justify">
  Networking & Lead Capture
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Seamless contact exchange between attendees through QR scanning
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Allow attendees to search for users, ‘favourite’ their contacts, and export contact lists
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Connect attendees through Events2go in-App chat & meeting booking tools
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Helps attendees find exhibitors through an interactive floor map
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Host a live feed of the goings-on in your event or seek feedback instantly
  </Typography>
</Grid>
<Grid xs={1}>
</Grid>
<Grid xs={1}>

      </Grid>  
<Grid xs={4}>
  <Typography variant="h5" color="purple" marginTop="50px" textAlign="justify">
  Promotion, Branding and Sponsorship
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Create white-labelled apps featuring your custom branding
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Sell spaces within your app’s virtual exhibit hall
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Offer full-page splash ads to increase sponsor visibility
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Set up rolling banner ads throughout the mobile app
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Set up a sponsor’s page to increase logo visibility
  </Typography>
</Grid>
<Grid xs={1}>
</Grid>
</Grid>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>   
    <Grid xs={1}>
      </Grid>  
<Grid xs={4}>
  <Typography variant="h5" color="purple" marginTop="50px" textAlign="justify">
  Reporting and Analytics
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Track attendance rates, session check-ins and booth traffic within the app
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Evaluate individual attendee engagement through attendee journey tracking
  </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Measure satisfaction through surveys about the event in general and individual sessions
   </Typography>
  <Typography variant="body2"  textAlign="justify"> 
  • Export your data to further evaluate and share with event partners
  </Typography>
</Grid>
</Grid>

    </Box>
        </>
    )
}