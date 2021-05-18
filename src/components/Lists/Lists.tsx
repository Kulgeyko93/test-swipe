/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setListItem, setFullHeight } from "../../store/actions/listAction";
import { RootState } from "../../store/rootRedusers";
import ListItem from "../ListItem/ListItem";
import Textarea from "../Textarea/Textarea";
import "./list.scss";

const Lists = (): JSX.Element => {
  const dispatch = useDispatch();
  const lists: Array<string> = useSelector(
    (state: RootState) => state.list.items
  );

  const [value, setValue] = useState<string>("");

  const handleAddListItem = (value: string) => {
    if (value === "") return;
    dispatch(setListItem(value));
    setValue("");
  };

  useEffect(() => {
    dispatch(setFullHeight(document.body.scrollHeight));
  }, []);

  useEffect(() => {
    dispatch(setFullHeight(document.body.scrollHeight));
  }, [lists.length]);

  return (
    <>
      <div className='list__text'>
        <Textarea value={value} setValue={setValue} />
        <button className='btn' onClick={() => handleAddListItem(value)}>
          Send
        </button>
      </div>
      <div className='list__items'>
        {lists.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Lists;
