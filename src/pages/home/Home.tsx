import { Box, Button, Card, Container, Paper, Typography } from '@mui/material'
import type { FC, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../constants/routeConstants';
import FeaturedMember from '../../components/FeaturedMember';
import PeopleIcon from '@mui/icons-material/People';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { deepOrange } from '@mui/material/colors';

const Home: FC = (): ReactElement => {
  const navigate = useNavigate();

  const getStartedClick = () => {
    navigate(ROUTE_CONSTANTS.TEAM);
  }

  return (
    <div className="main home">
      <Container className='hero-section' sx={{ mt: 2 }}>
        <Paper sx={{ p: 2, display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box display="flex" justifyContent="space-between" width='100%'>
            <Box m={2}>
              <Typography component="h1" sx={{ fontSize: 42, fontWeight: 'bold'}}>
                <div className={`shiny-text`} style={{ animationDuration: '2s' }}>
                  Welcome to the Team Marvel
                </div>
              </Typography>
              <Typography sx={{ mb: 2, color: '#ffffffde', fontFamily: 'Atlassian Sans' }}>Expore our amazing team and learn about their roles, skills and contributions.</Typography>
              <Button sx={{ mb: 2 }} variant='contained' color='secondary' onClick={getStartedClick}>Meet the Team</Button>
            </Box>
            <FeaturedMember />
          </Box>
          <Box mb={2} display="flex" justifyContent="space-evenly" alignItems="center" flexWrap="wrap" width="100%">
            <Paper elevation={8} sx={{ m: 2, flex: 1, background: 'transparent', display: 'flex', flexFlow: 'column', padding: 2, alignItems: 'center' }}>
              <PeopleIcon sx={{ fontSize: '3rem', color: deepOrange[500] }}/>
              <Box sx={{ mt: 1, mb: 1, fontSize: 22 }}>12</Box>
              <Typography sx={{ fontSize: 18, fontFamily: 'Atlassian Sans' }}>Team Members</Typography>
            </Paper>
            <Paper elevation={8} sx={{ m: 2, flex: 1, background: 'transparent', display: 'flex', flexFlow: 'column', padding: 2, alignItems: 'center' }}>
              <SignalCellularAltIcon sx={{ fontSize: '3rem', color: deepOrange[500] }}/>
              <Box sx={{ mt: 1, mb: 1, fontSize: 22 }}>8</Box>
              <Typography sx={{ fontSize: 18, fontFamily: 'Atlassian Sans' }}>Projects</Typography>
            </Paper>
            <Paper elevation={8} sx={{ m: 2, flex: 1, background: 'transparent', display: 'flex', flexFlow: 'column', padding: 2, alignItems: 'center' }}>
              <ThumbUpIcon sx={{ fontSize: '3rem', color: deepOrange[500] }}/>
              <Box sx={{ mt: 1, mb: 1, fontSize: 22 }}>95%</Box>
              <Typography sx={{ fontSize: 18, fontFamily: 'Atlassian Sans' }}>Satisfaction</Typography>
            </Paper>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}

export { Home }