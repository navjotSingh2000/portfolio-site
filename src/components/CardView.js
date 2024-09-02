import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  cardStyles,
  modalStyles,
  instructionsContainerStyles,
  imageContainerStyles,
  imageStyles,
  previewImageStyles,
} from "./styles/CarViewStyles";

export default function CardView({
  num,
  title,
  description,
  image,
  preview,
  github,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item key={num} xs={12} sm={6} md={4}>
      <Card style={cardStyles}>
        <CardMedia
          component="img"
          style={imageStyles}
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography
            style={{ color: "black" }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography style={{ color: "black" }} paragraph>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {preview.startsWith("https") ? (
            <Button href={preview} size="small">
              Preview
            </Button>
          ) : (
            <>
              <Button onClick={handleOpen} size="small">
                Preview
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box style={modalStyles}>
                  <Box style={instructionsContainerStyles}>
                    Tap or click to close
                  </Box>
                  <Box style={imageContainerStyles}>
                    <CardMedia
                      component="img"
                      style={previewImageStyles}
                      image={preview}
                      alt="preview"
                      onClick={handleClose}
                    />
                  </Box>
                </Box>
              </Modal>
            </>
          )}
          <Button href={github} size="small">
            Github
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
