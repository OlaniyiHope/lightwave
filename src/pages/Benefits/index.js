import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useTheme from '@mui/material/styles/useTheme';
import PropTypes from 'prop-types';
import React from 'react';
import BenefitBox from './BenefitBox';
import { benefits } from './utils/helpers';

function Benefits({ headingToggle }) {
  const theme = useTheme();
  return (
    <section 
    
    >
      <Container>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
           fontSize: "25px",
            fontWeight: 700,
            marginBottom: '58px',
          }}
        >
         Why UGC Creatives are the Key to Unlocking Engagement
        </Typography>
        <Grid
      
          container
          columns={{ xs: 4, sm: 8, md: 6 }}
          spacing={{ xs: 2, sm: 2, md: 2 }}
        >
          {benefits.map(({ pContent, text }) => (
            <Grid key={pContent} item xs={4} sm={4} md={3}>
              <BenefitBox pContent={pContent} text={text}  />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

Benefits.propTypes = {
  headingToggle: PropTypes.bool.isRequired,
};

export default Benefits;
