import React, { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomAutocomplete, {
  top100Films,
} from "shared/ui/MultipleAutocomplete";
import DropDown from "shared/ui/DropDown";
import TextFieldInput from "shared/ui/TextField/TextField";
import SingleAutocomplete from "shared/ui/SingleAutocomplete";
import CustomButton from "shared/ui/Button";
import IndeterminateCheckbox from "shared/ui/Checkbox";

const HomePage = () => {
  const {
    control,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      textfield: "",
      textfield2: "",
      dropdown: "",
      autocomplete: [],
      autocomplete2: "",
    },
  });

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <Fragment>
      <TextFieldInput
        control={control}
        name="textfield"
        label="textfield"
        rules={{
          required: {
            value: true,
            message: "required",
          },
        }}
        errors={errors}
      />
      <TextFieldInput
        control={control}
        name="textfield2"
        label="password"
        isPassword={true}
        errors={errors}
        type="text"
        rules={{
          required: {
            value: true,
            message: "required",
          },
        }}
      />
      <DropDown
        control={control}
        name="dropdown"
        options={top100Films}
        label="dropdown"
        optionKey="name"
        optionId="name"
        rules={{
          required: {
            value: true,
            message: "required",
          },
        }}
        errors={errors}
      />
      <CustomAutocomplete
        control={control}
        name="autocomplete"
        optionKey="name"
        options={top100Films}
        setValue={setValue}
        rules={{
          required: {
            value: true,
            message: "required",
          },
        }}
        errors={errors}
        clearErrors={clearErrors}
      />
      <SingleAutocomplete
        control={control}
        name="autocomplete2"
        optionKey="name"
        options={top100Films}
        setValue={setValue}
        errors={errors}
        clearErrors={clearErrors}
        rules={{
          required: {
            value: true,
            message: "required",
          },
        }}
      />
      <IndeterminateCheckbox />
      <CustomButton buttonName="Submit" onClick={handleSubmit(onSubmit)} />
    </Fragment>
  );
};

export default HomePage;
