import React from 'react'
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CardView({ num, title, description, image, preview, github }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
        <Grid item key={num} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
            <CardMedia
                component="img"
                sx={{
                // 16:9
                  pt: '10%',
                }}
                image={image}
                alt="random"
            />
            <CardContent 
            // sx={{ flexGrow: 1 }}
            >
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography>
                  {description}
                </Typography>
            </CardContent>
            <CardActions>
                {preview.startsWith('https') ? <Button href={preview} size="small">Preview</Button>
                 : 
                 <>
                  <Button onClick={handleOpen} size="small">Preview</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                      <CardMedia
                        component="img"
                        // sx={{
                        // // 16:9
                        //   pt: '10%',
                        // }}
                        image={preview}
                        alt="preview"
                        />
                      </Box>
                    </Modal>
                 </>
                }
                
                <Button href={github} size="small">Github</Button>
            </CardActions>
          </Card>
        </Grid>
  )
}
