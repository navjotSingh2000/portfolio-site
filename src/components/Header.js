import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { social } from "./styles/HeaderStyles";
import Resume from "../data/resume-navjot-singh.pdf";

export default function Header() {
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
          Web Software Developer
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
          <Button variant="outlined" size="small" href={Resume}>
            View Resume
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
