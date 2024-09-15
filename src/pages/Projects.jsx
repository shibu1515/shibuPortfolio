import { Box, Container, Typography, Grid, Stack, Chip, useTheme } from '@mui/material'
import React from 'react'
import { gown, hub, school} from '../images/images'
import { LaunchOutlined } from '@mui/icons-material'

const Projects = () => {
  const theme = useTheme()
  return (
    <Container maxWidth="lg">
      <Box sx={{textAlign:'center'}} my={10}>
      <h1>
        Comming soon
      </h1>
      </Box>
    </Container>
  )
}

export default Projects