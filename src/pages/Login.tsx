import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export default function Login() {
  const [errorEmail, setErrorEmail] = useState(false);
  // const [errorPassword, setErrorPassword] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    let newUser = {
      email,
      password,
    };

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(String(email).toLowerCase())) {
      setErrorEmail(true);
    } else {
      axios.post(`${BASE_URL}/login`, newUser).then((response) => {
        console.log(response);
      });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Stack
        sx={{
          justifyContent: "space-around",
          height: "100vh",
          maxWidth: "320px",
        }}
      >
        <Link href="/#" variant="h5" color="primary" underline="none">
          <svg
            width="80"
            height="16"
            viewBox="0 0 80 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.36 15V0.999999H5.98C7.43333 0.999999 8.54 1.34 9.3 2.02C10.0733 2.68667 10.46 3.54667 10.46 4.6C10.46 5.48 10.22 6.18667 9.74 6.72C9.27333 7.24 8.7 7.59333 8.02 7.78C8.82 7.94 9.48 8.34 10 8.98C10.52 9.60667 10.78 10.34 10.78 11.18C10.78 12.2867 10.38 13.2 9.58 13.92C8.78 14.64 7.64667 15 6.18 15H0.36ZM2.92 6.88H5.6C6.32 6.88 6.87333 6.71333 7.26 6.38C7.64667 6.04667 7.84 5.57333 7.84 4.96C7.84 4.37333 7.64667 3.91333 7.26 3.58C6.88667 3.23333 6.32 3.06 5.56 3.06H2.92V6.88ZM2.92 12.92H5.78C6.54 12.92 7.12667 12.7467 7.54 12.4C7.96667 12.04 8.18 11.54 8.18 10.9C8.18 10.2467 7.96 9.73333 7.52 9.36C7.08 8.98667 6.48667 8.8 5.74 8.8H2.92V12.92ZM12.9172 15V0.599999H15.4772V15H12.9172ZM21.813 15.24C20.573 15.24 19.613 14.8533 18.933 14.08C18.2663 13.3067 17.933 12.1733 17.933 10.68V5.08H20.473V10.44C20.473 11.2933 20.6463 11.9467 20.993 12.4C21.3396 12.8533 21.8863 13.08 22.633 13.08C23.3396 13.08 23.9196 12.8267 24.373 12.32C24.8396 11.8133 25.073 11.1067 25.073 10.2V5.08H27.633V15H25.373L25.173 13.32C24.8663 13.9067 24.4196 14.3733 23.833 14.72C23.2596 15.0667 22.5863 15.24 21.813 15.24ZM35.0809 15.24C34.0809 15.24 33.1943 15.0267 32.4209 14.6C31.6476 14.1733 31.0409 13.5733 30.6009 12.8C30.1609 12.0267 29.9409 11.1333 29.9409 10.12C29.9409 9.09333 30.1543 8.18 30.5809 7.38C31.0209 6.58 31.6209 5.96 32.3809 5.52C33.1543 5.06667 34.0609 4.84 35.1009 4.84C36.0743 4.84 36.9343 5.05333 37.6809 5.48C38.4276 5.90667 39.0076 6.49333 39.4209 7.24C39.8476 7.97333 40.0609 8.79333 40.0609 9.7C40.0609 9.84667 40.0543 10 40.0409 10.16C40.0409 10.32 40.0343 10.4867 40.0209 10.66H32.4809C32.5343 11.4333 32.8009 12.04 33.2809 12.48C33.7743 12.92 34.3676 13.14 35.0609 13.14C35.5809 13.14 36.0143 13.0267 36.3609 12.8C36.7209 12.56 36.9876 12.2533 37.1609 11.88H39.7609C39.5743 12.5067 39.2609 13.08 38.8209 13.6C38.3943 14.1067 37.8609 14.5067 37.2209 14.8C36.5943 15.0933 35.8809 15.24 35.0809 15.24ZM35.1009 6.92C34.4743 6.92 33.9209 7.1 33.4409 7.46C32.9609 7.80667 32.6543 8.34 32.5209 9.06H37.4609C37.4209 8.40667 37.1809 7.88667 36.7409 7.5C36.3009 7.11333 35.7543 6.92 35.1009 6.92ZM47.0397 15V0.999999H52.6597C54.113 0.999999 55.2197 1.34 55.9797 2.02C56.753 2.68667 57.1397 3.54667 57.1397 4.6C57.1397 5.48 56.8997 6.18667 56.4197 6.72C55.953 7.24 55.3797 7.59333 54.6997 7.78C55.4997 7.94 56.1597 8.34 56.6797 8.98C57.1997 9.60667 57.4597 10.34 57.4597 11.18C57.4597 12.2867 57.0597 13.2 56.2597 13.92C55.4597 14.64 54.3264 15 52.8597 15H47.0397ZM49.5997 6.88H52.2797C52.9997 6.88 53.553 6.71333 53.9397 6.38C54.3264 6.04667 54.5197 5.57333 54.5197 4.96C54.5197 4.37333 54.3264 3.91333 53.9397 3.58C53.5664 3.23333 52.9997 3.06 52.2397 3.06H49.5997V6.88ZM49.5997 12.92H52.4597C53.2197 12.92 53.8064 12.7467 54.2197 12.4C54.6464 12.04 54.8597 11.54 54.8597 10.9C54.8597 10.2467 54.6397 9.73333 54.1997 9.36C53.7597 8.98667 53.1664 8.8 52.4197 8.8H49.5997V12.92ZM64.4169 15.24C63.4169 15.24 62.5302 15.0267 61.7569 14.6C60.9835 14.1733 60.3769 13.5733 59.9369 12.8C59.4969 12.0267 59.2769 11.1333 59.2769 10.12C59.2769 9.09333 59.4902 8.18 59.9169 7.38C60.3569 6.58 60.9569 5.96 61.7169 5.52C62.4902 5.06667 63.3969 4.84 64.4369 4.84C65.4102 4.84 66.2702 5.05333 67.0169 5.48C67.7635 5.90667 68.3435 6.49333 68.7569 7.24C69.1835 7.97333 69.3969 8.79333 69.3969 9.7C69.3969 9.84667 69.3902 10 69.3769 10.16C69.3769 10.32 69.3702 10.4867 69.3569 10.66H61.8169C61.8702 11.4333 62.1369 12.04 62.6169 12.48C63.1102 12.92 63.7035 13.14 64.3969 13.14C64.9169 13.14 65.3502 13.0267 65.6969 12.8C66.0569 12.56 66.3235 12.2533 66.4969 11.88H69.0969C68.9102 12.5067 68.5969 13.08 68.1569 13.6C67.7302 14.1067 67.1969 14.5067 66.5569 14.8C65.9302 15.0933 65.2169 15.24 64.4169 15.24ZM64.4369 6.92C63.8102 6.92 63.2569 7.1 62.7769 7.46C62.2969 7.80667 61.9902 8.34 61.8569 9.06H66.7969C66.7569 8.40667 66.5169 7.88667 66.0769 7.5C65.6369 7.11333 65.0902 6.92 64.4369 6.92ZM71.55 15V0.599999H74.11V15H71.55ZM76.7258 15V0.599999H79.2858V15H76.7258Z"
              fill="#0760A0"
            />
          </svg>
        </Link>
        <Stack spacing={2}>
          <Typography variant="h5" component="h2">
            Welcome back
          </Typography>
          <Typography sx={{ color: "#72767C" }}>
            Enter your email and password to sign in!
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              error={errorEmail}
              helperText={errorEmail && "Wrong email"}
              label="Email address"
              variant="outlined"
              name="email"
            />

            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                name="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              sx={{ padding: "16.5px 14px" }}
            >
              Sign in
            </Button>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <Link href="#" underline="none">
            Terms of use
          </Link>{" "}
          <Typography>|</Typography>
          <Link href="#" underline="none">
            Privacy policy
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
