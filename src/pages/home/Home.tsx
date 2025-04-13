import { Avatar, Box, Button, Card, Container, Paper, Typography } from '@mui/material'
import type { FC, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../constants/routeConstants';
import FeaturedMember from '../../components/FeaturedMember';

const Home: FC = (): ReactElement => {
  const navigate = useNavigate();

  const getStartedClick = () => {
    navigate(ROUTE_CONSTANTS.TEAM);
  }

  return (
    <div className="main home">
      <Container className='hero-section'>
        <Paper sx={{ mt: 2, p: 2, display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box display="flex" justifyContent="space-between" width='100%'>
            <Box m={2}>
              <Typography component="h1" sx={{ fontSize: 42, fontWeight: 'bold'}}>
                <div className={`shiny-text`} style={{ animationDuration: '2s' }}>
                  Welcome to the Team Marvel
                </div>
              </Typography>
              <Typography sx={{ mb: 2, color: '#ffffffde' }}>Expore our amazing team and learn about their roles, skills and contributions.</Typography>
            </Box>
            <FeaturedMember />
          </Box>
          
          <Button variant='contained' color='secondary' onClick={getStartedClick}>Meet the Team</Button>
        </Paper>
      </Container>
    </div>
  )
}

export { Home }