import { Box, Container, Typography, Grid, Stack, Chip, useTheme } from '@mui/material'
import React from 'react'
import { gown, hub, school} from '../images/images'
import { LaunchOutlined } from '@mui/icons-material'

const Projects = () => {
  const theme = useTheme()
  return (
    <Container maxWidth="lg" >
      <div className='projects-div-2'>
        <div className='custom-download-cv-web-5' style={{ backgroundColor: "#3178C6" }}>
          <Typography variant='body1' className='body1-menu-variant' textAlign={"center"} color={"#FFFFFF"}>Work</Typography>
        </div>
        <Box mt={5} >
          <Typography variant='body2' className='body2-variant' textAlign={"center"}>
            Some of the net ,worthy projects I have built:
          </Typography>
        </Box>

        <Box mt={4} display={"flex"} justifyContent={"center"}>
          <div className="card-custom" style={{ backgroundColor: theme?.palette?.mode === "dark" && "#111827" }}>
            <Grid container spacing={2}>

              <Grid item xs={12} md={6}>
          
                <Box sx={{ display: "flex", justifyContent: "center" }} className="project-box-card"
                  style={{ backgroundColor: theme?.palette?.mode === "dark" && "#374151" }}
                >
                  <img src={gown} alt='skillimage' className='skillimage-proj' />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}  >
                <Box className="project-box-card-2" >
                  <Typography variant='h2' className='h2-variant'>Wedding Gown</Typography>
                  <Box mt={2}>
                    <Typography variant='h6' className='h6-variant'>
                      Wedding Gown app is a bridal web app.
                      The dress marketplace brings together newly-wed brides,
                      visionary designers, and brides-to-be. Sell your dress, explore timeless designs,
                      find your dream dress, and embark on your journey to a perfect wedding day.
                      We were 4 developers working on this project
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Stack direction={"row"} mt={1} gap={2} flexWrap="wrap">
                      <Chip label="Next js" color={'primary'} size={"small"} className='chip-header-4' style={{
                        color: theme?.palette?.mode === "dark" && "#FFFFFF",
                        backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                      }} />
                      <Chip label="React query" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                      <Chip label="Antd design" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                      <Chip label="Nodejs" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                      <Chip label="GitHub" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                    </Stack>
                  </Box>

                  <Box mt={2}>
                  <a href="https://weddinggown.com" target="_blank" rel="noopener noreferrer">
                      <LaunchOutlined sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF" }} />
                    </a>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>
        <Box mt={3} display={"flex"} justifyContent={"center"}>
          <div className="card-custom" style={{ backgroundColor: theme?.palette?.mode === "dark" && "#111827" }}>
            <Grid container spacing={2} sx={{
              flexDirection: {
                xs: 'column-reverse',
                md: 'row',
              },
            }}>

              <Grid item xs={12} md={6}  >
                <Box className="project-box-card-2" >
                  <Typography variant='h2' className='h2-variant'>CTS Hub</Typography>
                  <Box mt={2}>
                    <Typography variant='h6' className='h6-variant'> Cts Hub is a billing app.
                      It is a Canada-based project. The app updates shipping details, buying details, stock details,
                      and delivery details for a mall. I also provide support for this project. When updates are required,
                      I implement them in the frontend. This project contains some branches.
                      Cts Hub is an admin dashboard, and those branches are customer-facing web applications. We were 5 developers working on this project
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Stack direction={"row"} mt={1} gap={2} flexWrap="wrap">
                      <Chip label="React js" color={'primary'} size={"small"} className='chip-header-4' style={{
                        color: theme?.palette?.mode === "dark" && "#FFFFFF",
                        backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                      }} />
                      <Chip label="Redux Toolkit" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                      <Chip label="Mantine" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                      <Chip label="Laravel" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                      <Chip label="Bitbucket" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                    </Stack>
                  </Box>

                  <Box mt={2}>
                  <a href="https://tevola.ctsbuildingsupplies.com/login?path=/" target="_blank" rel="noopener noreferrer">
                      <LaunchOutlined sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF" }} />
                    </a>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} >
                <Box sx={{ display: "flex", justifyContent: "center" }} className="project-box-card"
                  style={{ backgroundColor: theme?.palette?.mode === "dark" && "#374151" }}
                >
                  <img src={hub} alt='skillimage' className='skillimage-proj' />

                </Box>

              </Grid>
            </Grid>
          </div>
        </Box>
        <Box mt={3} display={"flex"} justifyContent={"center"}>
          <div className="card-custom" style={{ backgroundColor: theme?.palette?.mode === "dark" && "#111827" }}>
            <Grid container spacing={2}>

              <Grid item xs={12} md={6} >

                <Box sx={{ display: "flex", justifyContent: "center" }} className="project-box-card"
                  style={{ backgroundColor: theme?.palette?.mode === "dark" && "#374151" }}
                >
                  <img src={school} alt='skillimage' className='skillimage-proj' />
                </Box>

              </Grid>

              <Grid item xs={12} md={6}  >
                <Box className="project-box-card-2" >
                  <Typography variant='h2' className='h2-variant'>SM School</Typography>
                  <Box mt={2}>
                    <Typography variant='h6' className='h6-variant'>This project is a complete school website.
                      It was the first project where I led the team. We were 3 developers working on this project.
                      The website involves school admissions, school activities, information about the school,
                      and includes the number of teaching and non-teaching staff.
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Stack direction={"row"} mt={1} gap={2} flexWrap="wrap">
                      <Chip label="HTML" color={'primary'} size={"small"} className='chip-header-4' style={{
                        color: theme?.palette?.mode === "dark" && "#FFFFFF",
                        backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                      }} />
                      <Chip label="CSS" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                      <Chip label="Jquery" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                      <Chip label="Laravel" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                      <Chip label="GitHub" color={'primary'} size={"small"} className='chip-header-4'
                        style={{
                          color: theme?.palette?.mode === "dark" && "#FFFFFF",
                          backgroundColor: theme?.palette?.mode === "dark" && "#3178C6"
                        }}
                      />
                    </Stack>
                  </Box>

                  <Box mt={2}>
                    <a href="https://stagingurl.tk/sm_school/" target="_blank" rel="noopener noreferrer">
                      <LaunchOutlined sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF" }} />
                    </a>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>

      </div>
    </Container>
  )
}

export default Projects