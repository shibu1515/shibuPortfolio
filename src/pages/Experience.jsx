import { Box, Container, Grid, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { PaperStyle } from '../theme/helpertheme'
import { capecom, darklogocape, darkmlogo, msquared } from '../images/images'
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS

const Experience = () => {
    const theme = useTheme();

    // Initialize AOS
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div style={{ backgroundColor: theme?.palette?.mode === "light" ? "#F9FAFB" : "#111827" }}>
            <Container maxWidth="lg" >
                <div className='custom-download-cv-web-4' style={{ backgroundColor: "#3178C6" }}>
                    <Typography variant='body1' className='body1-menu-variant' textAlign={"center"} color={"#FFFFFF"} data-aos="fade-up">Experience</Typography>
                </div>

                <Box mt={5} >
                    <Typography variant='body2' className='body2-variant' textAlign={"center"} data-aos="zoom-in">
                        Here is a quick summary of my most recent experiences:
                    </Typography>
                </Box>

                <Box mt={5} display={"flex"} justifyContent={"center"} >
                    <PaperStyle elevation={3} data-aos="zoom-in">
                        <Grid container spacing={{ xs: 1, md: 2 }}>
                            <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
                                <Box display={"flex"} justifyContent={{ xs: "flex-start", md: "center" }} >
                                    {
                                        theme?.palette?.mode === "light" ? 
                                        <img src={capecom} alt='icon' className='image-icon' data-aos="zoom-in" /> :
                                        <img src={darklogocape} alt='icon' className='image-icon' data-aos="zoom-in" />
                                    }
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Stack direction={{ xs: "column-reverse", md: "row" }} gap={{ md: 10, lg: 15 }}>
                                    <Typography variant='h2' className="h2-variant" mt={{ xs: 1, md: "unset" }} ml={{ xs: 0, md: 2 }} data-aos="zoom-in">Frontend Developer Reactjs</Typography>
                                    <Typography variant="h6" className="h6-variant" mt={{ xs: 1, md: "unset" }} ml={{ xs: 0, md: "unset" }} data-aos="zoom-in">July 2023 - present</Typography>
                                </Stack>

                                <Box paddingRight={{ md: 16, lg: 20 }}>
                                    <ul className='ul-experience'>
                                        <li className='li-experience' style={{ color: theme?.palette?.mode === "light" && "#4B5563" }}data-aos="zoom-in">
                                            Developed and maintained responsive web applications.
                                        </li>
                                        <li className='li-experience' style={{ color: theme?.palette?.mode === "light" && "#4B5563" }} data-aos="zoom-in">
                                            In this company, I completed 3 projects and am working on 1 ongoing project.
                                        </li>
                                        <li className='li-experience' style={{ color: theme?.palette?.mode === "light" && "#4B5563" }} data-aos="zoom-in">
                                            Learned new skills like Next.js and Redux Toolkit.
                                        </li>
                                        <li className='li-experience' style={{ color: theme?.palette?.mode === "light" && "#4B5563" }} data-aos="zoom-in">
                                            Friendly environment with senior guidance helped me improve my skills.
                                        </li>
                                    </ul>
                                </Box>
                            </Grid>

                        </Grid>
                    </PaperStyle>
                </Box>

                <Box mt={5} display={"flex"} justifyContent={"center"} >
                    <PaperStyle elevation={3} sx={{ marginBottom: "20px" }} data-aos="zoom-in">
                        <Grid container spacing={{ xs: 1, md: 2 }}>
                            <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                <Box display={"flex"} justifyContent={{ xs: "flex-start", md: "center" }} >
                                    {
                                        theme?.palette?.mode === "light" ? 
                                        <img src={msquared} alt='icon' className='image-icon' data-aos="zoom-in" /> :
                                        <img src={darkmlogo} alt='icon' className='image-icon'data-aos="zoom-in" />
                                    }
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8} >
                                <Stack direction={{ xs: "column-reverse", md: "row" }} gap={{ md: 10, lg: 15 }}>
                                    <Typography variant='h2' className="h2-variant" mt={{ xs: 1, md: "unset" }} ml={{ xs: 0, md: 2 }} data-aos="zoom-in">Frontend Developer</Typography>
                                    <Typography variant="h6" className="h6-variant" mt={{ xs: 1, md: "unset" }} ml={{ xs: 0, md: "unset" }}data-aos="zoom-in">Dec 2021 - Sep 2022</Typography>
                                </Stack>
                                <Box paddingRight={{ md: 16, lg: 20 }}>
                                    <ul className='ul-experience'>
                                        <li className='li-experience' style={{ color: theme?.palette?.mode === "light" && "#4B5563" }} data-aos="zoom-in">
                                            As a fresher, I joined that company and worked on 2 projects.
                                        </li>
                                        <li className='li-experience' style={{ color: theme?.palette?.mode === "light" && "#4B5563" }} data-aos="zoom-in">
                                            Both projects were Admin Dashboards with full RESTful API integration.
                                        </li>
                                        <li className='li-experience' style={{ color: theme?.palette?.mode === "light" && "#4B5563" }} data-aos="zoom-in">
                                            It was a friendly environment. The first company gave me a chance and encouraged my skills.
                                        </li>
                                        <li className='li-experience' style={{ color: theme?.palette?.mode === "light" && "#4B5563" }} data-aos="zoom-in">
                                            That was the first stepping stone of my IT career.
                                        </li>
                                    </ul>
                                </Box>
                            </Grid>
                        </Grid>
                    </PaperStyle>
                </Box>

            </Container>
        </div>
    )
}

export default Experience;
