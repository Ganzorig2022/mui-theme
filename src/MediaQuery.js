import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const MyDiv = styled('div')(({ theme }) => ({
  padding: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.primary,
  },
  [theme.breakpoints.between('md', 'lg')]: {
    backgroundColor: theme.palette.primary.blue,
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const MediaQuery = () => {
  const styles = {
    bg: {
      backgroundColor: (theme) => ({
        lg: theme.palette.text.primary,
      }),
    },
  };
  return (
    <MyDiv>
      <Typography sx={styles.bg}>1000px:(md)</Typography>
      <Typography sx={{ margin: (theme) => theme.spacing(5) }}>
        1280px:(lg)
      </Typography>
    </MyDiv>
  );
};
