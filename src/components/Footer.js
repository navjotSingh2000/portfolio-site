import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://navjotsingh.net/">
        Navjot Singh
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box sx={{ p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Thanks for Visiting 🙏
      </Typography>
      <Copyright />
    </Box>
  );
}
