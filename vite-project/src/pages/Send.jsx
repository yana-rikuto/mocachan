import { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Avatar, Grid, Button, TextField, Stack } from '@mui/material';

const Send = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [dstUser, setDstUser] = useState({});
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState(''); 


  const hundleSubmit = async () => {
    const url = 'http://localhost:3000/remittance_histories';
    const data = {
      src_id: user.id,
      dst_id: dstUser.id,
      amount: Number(amount),
      message: message
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log(responseData)
      navigate('/success')
    } catch (error) {
      console.error('Error:', error);
    }
  }

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

    async function fetchDstUser() {
      try {
        const url = 'http://localhost:3000/users/' + id
        const response = await fetch(url);
        const userData = await response.json();
        setDstUser(userData); // APIから取得したデータをuserに設定
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchFirstUser();
    fetchDstUser();
  },[])

  return (
    <>
      <Grid container spacing={2} sx={{paddingTop: '100px'}}>
        <Grid item xs={6}>
          <Avatar alt="User" src={dstUser?.image?.url} sx={{ width: 120, height: 120, paddingLeft: '40px'}}/>
        </Grid>
        <Grid item xs={6}>
          <p style={{paddingTop: '20px', fontSize: '24px'}}>{dstUser?.name}</p>
        </Grid>
      </Grid>
      <p style={{fontSize: '10px', paddingLeft: '20px'}}>口座番号: {dstUser?.account_number} </p>
      <p style={{textAlign: 'center'}}>送金上限額：{user?.money}円</p>
      <Stack spacing={3} sx={{ paddingX: "20px", paddingTop: "10px"}}>
        <TextField
          required
          label="送金額"
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <TextField
          label="メッセージ（任意）"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <Button variant="contained" color="primary" onClick={hundleSubmit} disabled={!amount}>
          送金する
        </Button>
      </Stack>
    </>
  )
}

export default Send