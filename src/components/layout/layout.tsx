import { List } from 'antd';
import { CardList } from '../card-list/card-list';
import { IJokes } from '../../redux/search.types';
import './layout.css'


export interface ILayoutProps {
    total?: number
    result?: IJokes[]
}


export function Layout (props: ILayoutProps) {

  return (
    <List>
        <CardList {...props} />
    </List>
  );
}
