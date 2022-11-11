import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardView from './CardView';
import {ProjectsList} from '../data/ProjectsList'

const theme = createTheme();

export default function ProjectsDisplay() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Navjot Singh
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Junior Software Developer
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Hello</Button>
              <Button variant="outlined">Bonjour</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              {ProjectsList.map((project)=>{
                  return(
                    <CardView 
                      title={project.title} 
                      description={project.desc}
                      image={project.image}/>
                  )
              })}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
        
      {/* End footer */}
    </ThemeProvider>
  );
}