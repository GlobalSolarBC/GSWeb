export const SxStyles = (color: string) => {
  return {
    '& .MuiInputBase-root': {
      color: `${color}`,
      // color: '#fff',
    },
    '& .MuiInputBase-input': {
      borderBottom: '1px solid #ced4da',
      padding: '10px 0 5px',
    },

    '& label.Mui-focused': {
      color: `${color}`,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `${color}`,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: `${color}`,
      },
      '&:hover fieldset': {
        borderColor: `${color}`,
      },
      '&.Mui-focused fieldset': {
        borderColor: `${color}`,
      },
    },
  };
};
