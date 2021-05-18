import React from "react";
import "./textarea.scss";

type TProps = {
  value: string;
  setValue: (value: string) => void;
};

const Textarea = ({ value, setValue }: TProps): JSX.Element => {
  return (
    <>
      <div className='group'>
        <input
          type='text'
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className='bar'></span>
        <label>Ведите текст</label>
      </div>
    </>
  );
};

export default Textarea;

// {/* <input
//         className='list__input'
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <span className='bar'></span>
//       <label>Text</label> */}
