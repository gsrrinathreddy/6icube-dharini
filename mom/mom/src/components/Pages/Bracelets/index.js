import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BasicCard from '../../BasicCard';
export default function Bracelets(){
    return(
        <>
         <Box sx={{ flexGrow: 1 }}>
      
        <Grid xs={12} sx={{backgroundColor:"pink"}}>
         gold
         <Grid container spacing={0}>
         <BasicCard/>
         <BasicCard/>
        </Grid>
        <Grid xs={12} sx={{backgroundColor:"skyblue"}}>
         silver 
         <Grid container spacing={0}>
         <BasicCard/>
         <BasicCard/>
        </Grid>
        <Grid xs={12} sx={{backgroundColor:"green"}}>
         platinum 
         <Grid container spacing={0}>
         <BasicCard/>
         <BasicCard/>
        </Grid>
        <Grid xs={12} sx={{backgroundColor:"red"}}>
         diamond
         <Grid container spacing={0}>
         <BasicCard/>
         <BasicCard/>
        </Grid>
      </Grid>
      </Grid>
      </Grid>
      </Grid>
    </Box>
        </>
    )

}