import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import BasicCard from '../../BasicCard';
 

export default function Events(){
    const events=[
        {
         image:"https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgwOTg3ODIzNDY1NTk3/what-is-diwali-jpg.jpg",
         title:"Festival of LIGHTS in the world",
         date:"May 26, 2023",
         time:"10am - 11am",
         location:"Sydney, Australia"
        },
        {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAfTy791HKb1kDqhDlqsXDOmchJI44SpnLpLtgzNwzQ&usqp=CAU&ec=48665699",
        title:"Mother's Day",
        date:"May 27, 2023",
        time:"11am to 4pm",
        location:"Lalor Park Community Centre, 1 Freeman St, Lalor Park NSW 2147"
        },
        {
        image:"http://events2go.com.au/uploads/upcomingevents/_upcoming_1684868547.png",
        title:"The Quality of being able to be reached(Accessebility) ",
        date:"May 25, 2023",
        time:"7pm to 12am",
        location:"Opera House sails"
        },
        {
            image:"https://houseofhens.com.au/assets/House-of-Hens/Destinations-HOH/7fb1db9f3d/brisbane-at-night__FocusFillWzk4NCw5ODQsIngiLDI0NV0.jpg",
            title:"Hot Brown Honey  THE REMIX",
            date:"May 25,2023",
            time:"11Am to 12Pm",
            location:"Australia"
        },
        {
            image:"http://events2go.com.au/uploads/upcomingevents/_upcoming_1684239743.png",
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
    return(
        <>
            <Grid item xs={12} sx={{backgroundColor:"white",p: 4,marginLeft:"110px"}}>
    <Grid container spacing={0}>
        {
            events.map((events)=>{
                return <BasicCard image={events.image} title={events.title} date={events.date} time={events.time} location={events.location}/>
            })
        }
        </Grid>
        </Grid>

    
        </>
    )
}