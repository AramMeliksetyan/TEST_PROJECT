import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const data = [{ label: "first" }, { label: "second" }];

const IndeterminateCheckbox = () => {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChangeChildren = (
    event: React.ChangeEvent<HTMLInputElement>,
    _: any,
    index: any
  ) => {
    console.log(index);
    const gago = [...checked];
    gago[index] = event.target.checked;
    setChecked(gago);
  };

  const handleChangeParent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  console.log(checked);

  return (
    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked.every((checked) => checked)}
            indeterminate={!checked.every((checked) => checked)}
            onChange={handleChangeParent}
          />
        }
      />
      {data.map((item: any, index: number) => (
        <FormControlLabel
          key={item.label}
          label={item.label}
          control={
            <Checkbox
              checked={checked[index]}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement>,
                checked: any
              ) => handleChangeChildren(event, checked, index)}
            />
          }
        />
      ))}
    </div>
  );
};

export default IndeterminateCheckbox;
