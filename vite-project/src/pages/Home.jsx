import { useState, useEffect } from 'react';
import { Avatar, Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFirstUser() {
      try {
        const response = await fetch('http://localhost:3000/first_user');
        const userData = await response.json();
        setUser(userData); // APIから取得したデータをuserに設定
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchFirstUser();
  },[])

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }

  return (
    <>
      <Grid container spacing={2} sx={{paddingTop: '100px'}}>
        <Grid item xs={6}>
          <Avatar alt="User" src={user?.image?.url} sx={{ width: 120, height: 120, paddingLeft: '40px'}}/>
        </Grid>
        <Grid item xs={6}>
          <p style={{paddingTop: '20px', fontSize: '24px'}}>{user?.name}</p>
        </Grid>
      </Grid>
      <p style={{fontSize: '10px', paddingLeft: '20px'}}>口座番号: {user?.account_number} </p>
      <p style={{textAlign: 'center'}}>預金残高</p>
      <p style={{backgroundColor: '#f5f5f5', textAlign: 'right', marginLeft: '20px', marginRight: '20px'}}>{numberWithCommas(user?.money || 0)}</p>
      <Box
        display="flex"
        justifyContent="center"
        sx={{paddingTop: '40px'}}
      >
        <Button variant="contained" color="primary" onClick={() => navigate('/select')}>
          送金する
        </Button>
      </Box>
    </>
  )
}

export default Home