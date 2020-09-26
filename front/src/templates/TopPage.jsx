import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {PrimaryButton} from "../components/UIkit"

const TopPage = () => {

  return (
    <Container>
      <Typography>かんたん！5秒で登録！</Typography>
      <PrimaryButton
        label={"ボタン"}
        onClick={() => console.log("Clicked!")}
      />
    </Container>
  );
};

export default TopPage
