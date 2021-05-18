import React from "react";
import "./listItem.scss";

type TProps = {
  item: string;
};

const ListItem = ({ item }: TProps): JSX.Element => {
  return <div className='item'> - {item}</div>;
};

export default ListItem;
