import React,{ ReactNode, ChangeEvent, MouseEvent } from 'react';
import { InputAdornment, TextField } from '@mui/material';

export interface ITextFieldProps {
  variant: 'outlined' | 'standard' | 'filled';
  placeholder: string;
  sx?: object;
  textFieldIcon?: ReactNode;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ variant, placeholder, sx, value, onChange, textFieldIcon }: ITextFieldProps) => {
    return (
      <TextField
        variant={variant}
        placeholder={placeholder}
        sx={sx}
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">{textFieldIcon}</InputAdornment>
        }}
      />
    );
  };
  

export default Input;
