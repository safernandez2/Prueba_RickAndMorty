import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

type CardType = {
    name:string,
    air_date:string,
    episode:string,
    characters:string,
    key:number
}

const AntCardE:React.FC<CardType> = ({name,air_date, episode, characters, key}:CardType) => (
    <Card
        style={{ width: 200 }}
       
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            title={name}
            description={air_date}
        />
    </Card>
);

export default AntCardE;
