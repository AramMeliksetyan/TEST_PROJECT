// to do error message
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Controller } from "react-hook-form";
import { Box, Chip } from "@mui/material";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
  chipDisabled?: boolean;
  setValue: any;
  clearErrors?: any;
  isOptionsLoading?: boolean;
}

const CustomAutocomplete = (props: IAutocomplete) => {
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
    chipDisabled,
    setValue,
    clearErrors,
    isOptionsLoading,
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
      render={({ field: { value, onChange } }: any) => {
        return (
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={options}
            disableCloseOnSelect
            value={value}
            noOptionsText="No option"
            className={className}
            classes={classes}
            loading={isOptionsLoading}
            loadingText="Loading..."
            onChange={onChangeHandler}
            isOptionEqualToValue={(option: any, value: any) =>
              option[optionKey] === value[optionKey]
            }
            filterOptions={filterOptions}
            getOptionDisabled={optionsDisabled}
            getOptionLabel={(option) => option[optionKey]}
            renderOption={(props: any, option, { selected }) => {
              return (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option[optionKey]}
                </li>
              );
            }}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => {
                return (
                  <Chip
                    label={option[optionKey]}
                    {...getTagProps({ index })}
                    disabled={chipDisabled}
                  />
                );
              })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Checkboxes"
                placeholder="Favorites"
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

export default CustomAutocomplete;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
export const top100Films = [
  { name: "The Shawshank Redemption", year: 1994 },
  { name: "The Godfather", year: 1972 },
  { name: "The Godfather: Part II", year: 1974 },
  { name: "The Dark Knight", year: 2008 },
  { name: "12 Angry Men", year: 1957 },
  { name: "Schindler's List", year: 1993 },
  { name: "Pulp Fiction", year: 1994 },
  {
    name: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { name: "The Good, the Bad and the Ugly", year: 1966 },
  { name: "Fight Club", year: 1999 },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    name: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { name: "Forrest Gump", year: 1994 },
  { name: "Inception", year: 2010 },
  {
    name: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { name: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { name: "Goodfellas", year: 1990 },
  { name: "The Matrix", year: 1999 },
  { name: "Seven Samurai", year: 1954 },
  {
    name: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { name: "City of God", year: 2002 },
  { name: "Se7en", year: 1995 },
  { name: "The Silence of the Lambs", year: 1991 },
  { name: "It's a Wonderful Life", year: 1946 },
  { name: "Life Is Beautiful", year: 1997 },
  { name: "The Usual Suspects", year: 1995 },
  { name: "L??on: The Professional", year: 1994 },
  { name: "Spirited Away", year: 2001 },
  { name: "Saving Private Ryan", year: 1998 },
  { name: "Once Upon a Time in the West", year: 1968 },
  { name: "American History X", year: 1998 },
  { name: "Interstellar", year: 2014 },
];
