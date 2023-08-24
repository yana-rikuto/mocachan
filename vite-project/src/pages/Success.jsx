import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const iconStyle = {
  fontSize: 98,   // アイコンの大きさ
  color: 'green', // アイコンの色
  marginBottom: '16px'
};

const Success = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CheckCircleOutlineIcon style={iconStyle} />
      <p>送金処理が完了しました</p>
      <Button component={Link} to="/home" variant="contained" color="primary">
        トップ画面に戻る
      </Button>
    </div>
  );
}

export default Success;
