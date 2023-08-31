import { Card, Typography } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import './card.css'
export interface ICardsProps {
    categories: any[]
    created_at: string
    icon_url: string
    id: string
    updated_at: string
    url: string
    value: string
}

const { Paragraph } = Typography;

dayjs.extend(relativeTime)

export function CardItem (props: ICardsProps) {
  return (
      <Card 
        key={props.id}
      >
        <Paragraph className='Jokes'>{props.value}</Paragraph>
        <footer className='cardFooter'>
        <a href={props.url} className='jokesId'>{props.id}</a>
        <a href={props.url} className='jokesDate'>{dayjs(props.created_at).fromNow()}</a>
        </footer>
      </Card>
  );
}
