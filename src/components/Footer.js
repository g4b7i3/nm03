import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/logo-1.png'

const Footer = () => (
  <Box mt='80px' bgcolor='#FFF3F4'>
    <Stack gap='40px' sx={{ alignItems: 'center' }} flexWrap='wrap' px='40px' pt='24px'>
      <img src={Logo} alt='logo' style={{ width: '110px', height: '50px' }} />
    </Stack>
    <Typography variant='h6' sx={{ fontSize: { lg: '25px', xs: '17px' } }} mt='41px' textAlign='center' pb='40px'>Feito por NM Performance Training</Typography>
  </Box>
)

export default Footer;
