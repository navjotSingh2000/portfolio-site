import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardView from './CardView';
import { ProjectsList } from '../data/ProjectsList'

const theme = createTheme();

export default function ProjectsDisplay() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container 
        // sx={{ py: 8 }}
         maxWidth="md">
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
    </ThemeProvider>
  );
}