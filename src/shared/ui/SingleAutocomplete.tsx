import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Controller } from "react-hook-form";

interface IAutocomplete {
  options: Array<any>;
  optionKey?: string;
  name: string;
  rules?: any;
  className?: any;
  disabled?: boolean;
  errors?: any;
  control: any;
  classes?: any;
  optionsDisabled?: ((option: any) => boolean) | undefined;
  filterOptions?: any;
  clearErrors?: any;
  isOptionsLoading?: boolean;
  freeSolo?: boolean;
  setValue: any;
}

const SingleAutocomplete = (props: IAutocomplete) => {
  const {
    options,
    optionKey = "name",
    name,
    rules,
    className,
    errors,
    control,
    classes,
    optionsDisabled,
    filterOptions,
    isOptionsLoading,
    freeSolo,
    setValue,
    clearErrors,
  } = props;

  const onChangeHandler = (_: any, value: any, reason: any) => {
    if (value) {
      clearErrors(`${name}`);
    }
    setValue(`${name}`, value);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value } }: any) => {
        return (
          <Autocomplete
            id="free-solo-demo"
            classes={classes}
            className={className}
            freeSolo={freeSolo}
            value={value}
            onChange={onChangeHandler}
            filterOptions={filterOptions}
            loading={isOptionsLoading}
            loadingText="Loading..."
            getOptionDisabled={optionsDisabled}
            options={options.map((option) => option[optionKey])}
            renderInput={(params) => (
              <TextField
                {...params}
                label="freeSolo"
                error={!!errors?.[name]?.message}
                helperText={errors?.[name]?.message}
              />
            )}
          />
        );
      }}
    />
  );
};

export default SingleAutocomplete;
