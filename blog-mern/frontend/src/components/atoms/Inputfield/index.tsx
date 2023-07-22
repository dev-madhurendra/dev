import { SxProps, TextField, styled } from "@mui/material";
import { ChangeEvent } from "react";
import { InputProps } from "@mui/material/Input";

export interface MyTextFieldProps {
  placeholder?: string;
  width?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps;
  value?: string;
  name?: string;
  InputProps?: InputProps;
  id?:string;
  error?: boolean;
  helperText?: string;
}



const MyTextField = ({
  placeholder,
  width,
  handleChange,
  sx,
  name,
  InputProps,
  value,
  id,
  error,
  helperText,
}: MyTextFieldProps) => {


    const StyledTextField = styled(TextField)({
        width:width,
    })
  

  return (
    <StyledTextField
      sx={sx}
      variant="outlined"
      placeholder={placeholder}
      value={value}
      name={name}
      InputProps={InputProps}
      onChange={handleChange}
      data-testid="textField"   
      id={id}
      error={error}
      helperText={helperText}
    />
  );
};

export default MyTextField;