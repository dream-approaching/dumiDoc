import React from 'react';
import { Card } from 'antd';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import 'video-react/dist/video-react.css'; // import css

export default ({
  title,
  url,
  poster,
}: {
  title: string;
  url: string;
  poster?: string;
}) => (
  <Card
    headStyle={{ padding: 0 }}
    bodyStyle={{ padding: 0 }}
    bordered={false}
    title={title}
  >
    <Player poster={poster}>
      <source src={url} />
      <BigPlayButton className="playBtn" position="center" />
      <LoadingSpinner />
    </Player>
  </Card>
);
