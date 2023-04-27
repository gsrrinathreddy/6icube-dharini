import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BasicCard from '../../BasicCard';
export default function Rings(){
    return(
        
          <>
         <Box sx={{ flexGrow: 1 }}>
      
        <Grid xs={12} sx={{backgroundColor:"purple"}}>
         gold
         <Grid container spacing={0}>
         <BasicCard/>
         <BasicCard/>
        </Grid>
        <Grid xs={12} sx={{backgroundColor:"red"}}>
         silver 
         <Grid container spacing={0}>
         <BasicCard/>
         <BasicCard/>
        </Grid>
        <Grid xs={12} sx={{backgroundColor:"pink"}}>
         platinum 
         <Grid container spacing={0}>
         <BasicCard/>
         <BasicCard/>
        </Grid>
        <Grid xs={12} sx={{backgroundColor:"skyblue"}}>
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