import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {PrimaryButton} from "../components/UIkit";
import { Helmet } from "react-helmet";

const TopPage = () => {

  return (
    <Container>
      <Helmet
        title="TopPage"
        meta={[
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:title', content: 'TopPage' },
          { name: 'twitter:description', content: 'description of TopPage' },
          { name: 'twitter:image', content: 'https://global.canon/ja/environment/bird-branch/photo-gallery/kijibato/img/gallery-kijibato-main@2x.jpg' },
          { property: 'og:title', content: 'TopPage' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://global.canon/ja/environment/bird-branch/photo-gallery/kijibato/index.html' },
          { property: 'og:image', content: 'https://global.canon/ja/environment/bird-branch/photo-gallery/kijibato/img/gallery-kijibato-main@2x.jpg' },
          { property: 'og:description', content: 'description of Home' },
        ]}
      />
      <Typography>かんたん！5秒で登録！</Typography>
      <PrimaryButton
        label={"ボタン"}
        onClick={() => console.log("Clicked!")}
      />
    </Container>
  );
};

export default TopPage
