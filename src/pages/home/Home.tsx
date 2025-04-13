import { Button, Container, Typography } from '@mui/material'
import type { FC, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../constants/routeConstants';

const Home: FC = (): ReactElement => {
  const navigate = useNavigate();

  const getStartedClick = () => {
    navigate(ROUTE_CONSTANTS.TEAM);
  }

  return (
    <div className="main home">
      <Container className='hero-section'>
        <Typography component="h1">Welcome to Our Team</Typography>
        <Typography>Meet our team members and find out more about their roles</Typography>
        <Button variant='contained' color='primary' onClick={getStartedClick}>Get Started</Button>
      </Container>
    </div>
  )
}

export { Home }