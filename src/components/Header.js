import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Axios from "axios";
import FileDownload from "js-file-download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { social } from "./styles/HeaderStyles";

const RESUME_URL = process.env.REACT_APP_RESUME_URL;
const CHECK_NOTI = process.env.REACT_APP_CHECK_NOTI;

const DownloadResume = async (e) => {
  if (!RESUME_URL) {
    console.error("Resume URL is not defined.");
    return;
  }

  await Axios({
    url: RESUME_URL,
    method: "GET",
    responseType: "blob",
  })
    .then((res) => {
      FileDownload(res.data, "resume-navjot-singh.pdf");
    })
    .catch((error) => {
      console.log(error.response);
    });
};

const LogToEmail = async () => {
  if (!CHECK_NOTI) {
    console.error("Notification URL is not defined.");
    return;
  }

  await Axios({
    url: CHECK_NOTI,
    method: "POST",
    responseType: "json",
    data: {
      name: "Visitor",
      email: "",
      subject: "Portfolio Accessed",
      message: "Somebody opened the Portfolio website",
    },
  })
    .then((res) => {
      // console.log(res.data)
    })
    .catch((error) => {
      console.log(error);
    });
};

export default function Header() {
  useEffect(() => {
    LogToEmail();
  }, []);

  return (
    <Box
      sx={{
        //  bgcolor: 'background.paper',
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
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Junior Software Developer
        </Typography>
        <Typography
          variant="body1"
          align="center"
          display="block"
          color="text.secondary"
          paragraph
        >
          Currently working at Cryopak, Montreal (June 2021 - Present)
        </Typography>
        <Typography
          variant="body1"
          align="center"
          display="block"
          color="text.secondary"
          paragraph
        >
          Graduated from Lasalle College, Montreal as a Programmer Analyst
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="outlined"
            onClick={() => DownloadResume()}
            size="small"
          >
            Download Resume
          </Button>
        </Stack>
        <Typography
          variant="body1"
          align="center"
          display="block"
          color="text.secondary"
          paragraph
          sx={{ pt: 6 }}
        >
          <LinkedInIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/navjotsingh5")
            }
            sx={social}
          />
          <GitHubIcon
            onClick={() => window.open("https://github.com/navjotSingh2000")}
            sx={social}
          />
        </Typography>
      </Container>
    </Box>
  );
}
