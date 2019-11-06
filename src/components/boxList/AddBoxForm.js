import React, { useState, useEffect, useContext } from "react";
import { BoxListContext } from "../../contexts/BoxListContext";

const AddBoxForm = () => {
  const [number, setNumber] = useState("");
  const { addBox, removeDataBox, dataBoxList } = useContext(BoxListContext);

  const handleChange = e => {
    setNumber(e.target.value);

    // addBox(number);
    // removeDataBox(number);
    // setNumber("");
  };

  useEffect(() => {
    if (number === "") {
      return;
    } else {
      handleSelect();
      console.log("useEffect number: ", number);
    }
    // eslint-disable-next-line
  }, [number]);

  const handleSelect = () => {
    addBox(number);
    removeDataBox(number);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (number === "") {
      alert("Select a box number");
      return;
    }

    addBox(number);
    removeDataBox(number);
    // setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-groub">
          {/* <label htmlFor="number">Box Number</label> */}
          <select
            value={number}
            onChange={handleChange}
            onSelect={handleSelect}
            className="form-control"
            id="number"
            name="number"
            required
          >
            <option value="selectBox">Select a Box</option>
            {dataBoxList.map((box, i) => {
              return (
                <option key={box.id} value={box.number}>
                  {box.number}
                </option>
              );
            })}
          </select>
        </div>

        {/* <button type="submit" className="btn btn-primary btn-block">
          Add Box
        </button> */}
      </form>
    </>
  );
};

export default AddBoxForm;
