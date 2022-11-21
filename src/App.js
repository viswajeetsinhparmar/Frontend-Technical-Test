import React, { useState } from "react";
import TextInput from "./component/TextInput/TextInput";
import Button from "./component/Button/Button";
import './App.css';
import { Input_FIELDS, Button_Labels, Operation_Types } from "./common/constant";

function App() {

  const [state, setState] = useState([
    { value: '', id: Input_FIELDS.INPUTONE, isHighlight: false },
    { value: '', id: Input_FIELDS.INPUTTWO, isHighlight: false },
    { value: '', id: Input_FIELDS.INPUTTHREE, isHighlight: false },
  ]);

  const buttonState = [
    {
      label: Button_Labels.BIGGEST,
      id: Operation_Types.MAXIMUM,
      operation: Operation_Types.MAXIMUM,
    },
    {
      label: Button_Labels.SMALLEST,
      id: Operation_Types.MINIMUM,
      operation: Operation_Types.MINIMUM,
    },
    {
      label: Button_Labels.ODD,
      id: Operation_Types.ODD,
      operation: Operation_Types.ODD,
    },
    {
      label: Button_Labels.EVEN,
      id: Operation_Types.EVEN,
      operation: Operation_Types.EVEN,
    },
    {
      label: Button_Labels.NEGATIVE,
      id: Operation_Types.NEGATIVE,
      operation: Operation_Types.NEGATIVE,
    },
  ];

  const resetFlag = () => {
    const updatedValue = state.map((num) => {
      num.isHighlight = false;
      return num;
    });
    setState(updatedValue);
  }

  const handleInputChange = (e) => {
    resetFlag();
    const value = e.target.value;
    const id = e.target.id;
    const updatedValue = state.map((number) => {
      let changedValue = number.value;
      if (number.id === id) {
        changedValue = value ? Number(value) : '';
      }
      return {
        ...number,
        value: changedValue,
      }
    });
    setState(updatedValue);
  }

  const findHighlightedField = (action) => {
    switch (action) {
      case Operation_Types.MAXIMUM:
        findMaximumNumber();
        break;
      case Operation_Types.MINIMUM:
        findMinimumNumber();
        break;
      case Operation_Types.ODD:
        findOddNumber();
        break;
      case Operation_Types.EVEN:
        findEvenNumber();
        break;
      case Operation_Types.NEGATIVE:
        findNegativeNumber();
        break;
      default:
    }

  }

  const toggleHighlightedValueMinMax = (number) => {
    return state.map((num) => {
      let isHighlight = false;
      if (num.value !== "" && num.value === number) {
        isHighlight = true;
      }else{
        isHighlight = false;
      }
      return {
        ...num,
        isHighlight,
      }
    });
  }

  const findMaximumNumber = () => {
    const filteredArray = state.filter((o) => o.value !== "" && o);
    const max = Math.max(...filteredArray.map((arr) => arr.value));
    const updatedValue = toggleHighlightedValueMinMax(max)
    setState(updatedValue);
  }

  const findMinimumNumber = () => {
    const filteredArray = state.filter((o) => o.value !== "" && o);
    const min = Math.min(...filteredArray.map(arr => arr.value));
    const updatedValue = toggleHighlightedValueMinMax(min)
    setState(updatedValue);
  }

  const findOddNumber = () => {
    const updatedValue = state.map((num) => {
      let isHighlight = false;
      if (num.value !== "" && num.value % 2 !== 0) {
        isHighlight = true;
      }else{
        isHighlight = false;
      }
      return {
        ...num,
        isHighlight,
      }
    });
    setState(updatedValue);
  }

  const findEvenNumber = () => {
    const updatedValue = state.map((num) => {
      let isHighlight = false;
      if (num.value !== "" && num.value % 2 === 0) {
        isHighlight = true;
      }else{
        isHighlight = false;
      }
      return {
        ...num,
        isHighlight,
      }  
    });
    setState(updatedValue);
  }

  const findNegativeNumber = () => {
    const updatedValue = state.map((num) => {
      let isHighlight = false;
      if (num.value < 0) {
        isHighlight = true;
      }else{
        isHighlight = false;
      }
      return {
        ...num,
        isHighlight,
      }
    });
    setState(updatedValue);
  }


  return (
    <>
      <div className="main-container">
        {state.map((fields) => {
          return (
            <div className="partition" key={fields.id}>
              <TextInput
                key={fields.id}
                type="number"
                id={fields.id}
                placeholder="Enter Number"
                name={fields.id}
                value={fields.value}
                onChange={e => handleInputChange(e)}
                styleClass={fields.isHighlight ? "highlight-field" : ""}
              />
            </div>
          )
        })}
      </div>
      <div className="main-container">
        <div className="partition-main">
          {buttonState.map((btn) => {
            return (
              <div className="partition" key={btn.id}>
                <Button
                  key={btn.id}
                  type="button"
                  onClick={() => findHighlightedField(btn.operation)}
                  label={btn.label}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
