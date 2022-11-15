import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Axios from "axios";
import FileDownload from "js-file-download";

const DownloadResume = async(e) => {
    await Axios({
      url: "https://resume-navjot-singh.herokuapp.com",
      method: "GET",
      responseType: "blob"
    }).then((res) => {
      FileDownload(res.data, "resume-navjot-singh.pdf")
    }).catch((error)=>{
      console.log(error.response)
      return error.response
    })
  }

export default function Header() {
  return (
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
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Currently working at Cryopak, Montreal (June 2021 - Present)
            Graduated from Lasalle College, Montreal as a Programmer Analyst
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
        </Typography>
        <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
        >
            <Button variant="outlined" onClick={()=>DownloadResume()} size="small">Download Resume</Button>
        </Stack>
        </Container>
    </Box>
  )
}
