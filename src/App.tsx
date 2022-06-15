import React from 'react';
import {Container} from "@mui/material";
import CommentsList from "./components/comments-list";
import './index.scss'


function App() {
  return (
    <Container>
      <CommentsList/>
    </Container>
  );
}

export default App;
