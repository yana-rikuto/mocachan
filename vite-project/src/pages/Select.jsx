import { useState, useEffect } from 'react';
import { Avatar, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const Select = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:3000/users');
        const userData = await response.json();
        setUsers(userData); // APIから取得したデータをuserに設定
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUsers();
  },[])

  return (
    <>
       <p style={{textAlign: 'center', paddingBottom:'30px', paddingTop:"30px", fontSize: '20px'}}>送金相手を選択</p>
       <List sx={style} component="nav" aria-label="mailbox folders">
        <Divider />
        {
          users.map((user) => {
            return (
              <ListItem button divider key={user?.account_number} component={Link} to={"/send/" + user.id}>
                <Avatar alt="User" src={user?.image?.url} sx={{ width: 70, height: 70, paddingLeft:"20px"}}/>
                <ListItemText sx={{ paddingLeft:"60px"}}>{user?.name}</ ListItemText>
              </ListItem>
            )
          })
        }
        <Divider />
      </List>
    </>
  )
}

export default Select