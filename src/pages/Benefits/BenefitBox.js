import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import useTheme from '@mui/material/styles/useTheme';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import useElevation from './useElevation';

function BenefitBox({ pContent, text }) {
  const { elevation, handleMouseOver, handleMouseOut } = useElevation();
  const theme = useTheme();

  return (
    <Paper
      elevation={elevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{ padding: '12px', color: '#fff', width: "90%", height: "280px", margin: "auto", paddingTop: "30px", border: "10px solid #159adb;",   backgroundColor: '#1C3A48' }}
    >
      <Grid container  >
      <Typography variant="body2" paragraph sx={{ margin: 0, fontSize: "24px", fontWeight: "700",  color: '#fff', marginBottom: '12px'}}>
      {text}
    </Typography>
    </Grid>
        <Grid
      container
        >
          <Typography variant="body2" paragraph sx={{  fontSize: "18px", fontWeight: "400",  color: '#fff', lineHeight: "2" }}>
            {pContent}
          </Typography>
        </Grid>
     
    </Paper>
  );
}

BenefitBox.propTypes = {
  pContent: PropTypes.string,
 
  text: PropTypes.string,
}.isRequired;

export default BenefitBox;
