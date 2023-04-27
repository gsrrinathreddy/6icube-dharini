import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export default function Bangles(){
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={0}>
       <Grid xs={12} sx={{backgroundColor:"red"}}>
        gold
       </Grid>
       <Grid xs={12} sx={{backgroundColor:"pink"}}>
        silver 
       </Grid>
       <Grid xs={12} sx={{backgroundColor:"lime"}}>
        designing
       </Grid>
       <Grid xs={12} sx={{backgroundColor:"skyblue"}}>
        diamond
       </Grid>
     </Grid>
   </Box>
   </>
    )
}