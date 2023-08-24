import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button, Container, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setMemo } from './memoSlice';
import { store } from './store';
import { Provider } from 'react-redux';
import {Home, Select, Send, Success} from './pages'

const IndexPage = () => {
  const dispatch = useDispatch();
  const memo = useSelector((state) => state.memo);
  return (
    <Container>
      <h1>待ち受け画面</h1>
      <p>残高: ¥100,000</p>
      <TextField
        label="MEMO"
        variant="outlined"
        value={memo}
        onChange={(e) => dispatch(setMemo(e.target.value))}
      />
      <Button component={Link} to="/history" variant="contained" color="primary">
        履歴
      </Button>
      <Button variant="contained" color="secondary">
        設定
      </Button>
      <Button component={Link} to="/home" variant="contained" color="primary">
        home
      </Button>
    </Container>
  );
};
const HistoryPage = () => {
  const memo = useSelector((state) => state.memo);
  const dispatch = useDispatch();
  return (
    <Container>
      <h1>履歴画面</h1>
      <p>ユーザー名変更</p>
      <TextField label="MEMO" variant="outlined" value={memo} onChange={(e) => dispatch(setMemo(e.target.value))} />
      <Button component={Link} to="/index" variant="contained" color="primary">
        戻る
      </Button>
    </Container>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/index" element={<IndexPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/" element={<IndexPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/select" element={<Select />} />
          <Route path="/send/:id" element={<Send />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </Provider>
  );
};
export default App;