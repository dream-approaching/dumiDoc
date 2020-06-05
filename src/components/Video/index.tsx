import React from 'react';
import { Card, Descriptions } from 'antd';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import styles from './index.less';

interface videoInfo {
  name?: string;
  shotName?: string;
  shotTime?: string;
}

export default ({
  title,
  url,
  poster,
  videoInfo,
}: {
  title: string;
  url: string;
  poster?: string;
  videoInfo?: videoInfo;
}) => (
  <>
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
    {videoInfo && (
      <Descriptions
        bordered
        size="small"
        column={{ xxl: 3, xl: 3, lg: 3, md: 1, sm: 1, xs: 1 }}
      >
        <Descriptions.Item className={styles.descItem} label="演练者">
          {videoInfo.name || '刘建成'}
        </Descriptions.Item>
        <Descriptions.Item className={styles.descItem} label="拍摄者">
          {videoInfo.shotName || '-'}
        </Descriptions.Item>
        <Descriptions.Item className={styles.descItem} label="拍摄时间">
          {videoInfo.shotTime || '-'}
        </Descriptions.Item>
      </Descriptions>
    )}
  </>
);
