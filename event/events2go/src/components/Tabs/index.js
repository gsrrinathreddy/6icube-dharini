import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Typography } from '@mui/material';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Top" value="1" />
            <Tab label="This Weekend" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1">
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm:2, md:3}}>
            <Grid xs={6}>
            <Typography variant='h6'>
            Hot Brown Honey THE REMIX - May 30 PARTY
            </Typography>
            <Typography color="gray">
            May 20, 2023
            11am to 12pm
            </Typography>
            <Typography color="magenta">
            Devla
            </Typography>
            <Typography marginTop="20px" color="magenta">
            Australia
            </Typography>
            <Typography color="gray">
            Sydney Opera weekends getting lit more than ever!...
            </Typography>
            </Grid>
    
            <Grid xs={6}>
                <Typography variant='h5'>
                Hyderabads Biggest Weekend THEME PARTY
                </Typography>
                <Typography color="gray">
                May 16, 2023
                11:00 am - 1:00 pm AEST
                </Typography>
                <Typography color="magenta">
                Same Events
                </Typography>
                <Typography marginTop="20px" color="magenta">
                Opera House, Bennelong Point, Sydney NSW 2000, Australia
                </Typography>
                <Typography color="gray">
                Sydney Opera weekends getting lit more than ever!...
                </Typography>
            </Grid>

            <Grid xs={12}>
                <Typography variant='h6'>
                Hot Brown Honey THE REMIX - May 30
                </Typography>
                <Typography color="gray">
                May 30, 2023
                11:00 am - 1:00 pm AEST
                </Typography>
                <Typography color="magenta">
                Sams Events
                </Typography>
                <Typography marginTop="20px" color="magenta">
                Opera House, Bennelong Point, Sydney NSW 2000, Australia
                </Typography>
                <Typography color="gray">
                Sydney Opera weekends getting lit more than ever!...
                </Typography>

            </Grid>
            </Grid>
            
            
        </TabPanel>
        <TabPanel value="2">
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm:2, md:3}}>
            <Grid xs={6}>
            <Typography variant='h6'>
            Hot Brown Honey THE REMIX - May 30 PARTY
            </Typography>
            <Typography color="gray">
            May 20, 2023
            11am to 12pm
            </Typography>
            <Typography color="magenta">
            Devla
            </Typography>
            <Typography marginTop="20px" color="magenta">
            Australia
            </Typography>
            <Typography color="gray">
            Sydney Opera weekends getting lit more than ever!...
            </Typography>
            </Grid>
            
            <Grid xs={6}>
                <Typography variant='h6'>
                Hot Brown Honey THE REMIX - May 30
                </Typography>
                <Typography color="gray">
                May 30, 2023
                11:00 am - 1:00 pm AEST
                </Typography>
                <Typography color="magenta">
                Sams Events
                </Typography>
                <Typography marginTop="20px" color="magenta">
                Opera House, Bennelong Point, Sydney NSW 2000, Australia
                </Typography>
                <Typography color="gray">
                Sydney Opera weekends getting lit more than ever!...
                </Typography>

            </Grid>
            </Grid>            

        </TabPanel>
        
      </TabContext>
    </Box>
  );
}