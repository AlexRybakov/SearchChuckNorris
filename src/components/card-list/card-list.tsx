import { Row } from 'antd';
import { IJokes } from '../../redux/search.types';
import { CardItem } from '../card/card';
import './card-list.css'

export interface ICardList  {
    total?: number
    result?: IJokes[]
  }


export function CardList(props: ICardList) {

    return (
        <Row>
            {props.result?.map((goodsData, index) => <CardItem key={index} {...goodsData}/>)}
        </Row>
    )
}