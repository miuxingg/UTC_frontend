// material
import { Stack, Button, Divider, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginFacebook, loginGoogle } from '../../../redux/auth/action';
import GoogleLoginForm from '../../SocialLoginContainer/Google';
// component
import Iconify from './Iconify';
import FacebookLogin from 'react-facebook-login';
import { useRef } from 'react';

const clientId =
  '200970573554-v8qm3tftfsikng4l2umi1gdcb2jv2bl0.apps.googleusercontent.com';
// ----------------------------------------------------------------------
export const AuthSocial: React.FC = () => {
  const dispatch = useDispatch();
  const ref = useRef<any>();
  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };

  const responseFacebook = (response: any) => {
    console.log(response);
    if (response?.email) {
      dispatch(
        loginFacebook({
          email: response.email,
          name: response?.name || '',
          avatar: response?.picture?.data?.url || '',
        }),
      );
    }
  };

  const componentClicked = (values: any) => {
    console.log(values);
  };
  return (
    <>
      {/* <GoogleLoginForm clientId={clientId} /> */}
      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          onClick={handleLoginGoogle}
        >
          <Iconify
            icon="eva:google-fill"
            color="#DF3E30"
            width={22}
            height={22}
          />
        </Button>
        <FacebookLogin
          ref={ref}
          appId="596511131806490"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          onClick={componentClicked}
          textButton=""
          icon={
            <Iconify
              icon="eva:facebook-fill"
              color="#1877F2"
              width={22}
              height={22}
            />
          }
        />
        {/* <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          onClick={() => {
            console.log(ref.current);
            ref.current.props.onClick;
          }}
        >
          <Iconify
            icon="eva:facebook-fill"
            color="#1877F2"
            width={22}
            height={22}
          />
        </Button> */}

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify
            icon="eva:twitter-fill"
            color="#1C9CEA"
            width={22}
            height={22}
          />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
};

export default AuthSocial;
