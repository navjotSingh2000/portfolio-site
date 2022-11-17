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
        sx={{ pb: 6 }}
         maxWidth="md">
          <Grid container spacing={4}>
              {ProjectsList.map((project, index)=>{
                  return(
                    <React.Fragment key={index}>
                      <CardView
                        num={index} 
                        title={project.title} 
                        description={project.desc}
                        image={project.image}
                        preview={project.preview}
                        github={project.github}
                        />
                    </React.Fragment>
                  )
              })}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}