// material
import { Stack, Button, Divider, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginFacebook, loginGoogle } from '../../../redux/auth/action';
import GoogleLoginForm from '../../SocialLoginContainer/Google';
// component
import Iconify from './Iconify';
import FacebookLogin from 'react-facebook-login';
import { useRef } from 'react';
import { FacebookAppId } from '../../../configs';
import GoogleLogin, { useGoogleLogin } from 'react-google-login';
import { setError } from '../../../redux/app';

const clientId =
  '532459309976-u4anma0797gt5vfgahcran9fib07vdi2.apps.googleusercontent.com';
// ----------------------------------------------------------------------
export const AuthSocial: React.FC = () => {
  const dispatch = useDispatch();
  const responseFacebook = (response: any) => {
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

  const onSuccess = (response: any) => {
    const {
      profileObj: { email, name, imageUrl },
    } = response;

    if (email) {
      dispatch(
        loginFacebook({
          email: email,
          name: name || '',
          avatar: imageUrl || '',
        }),
      );
    }
  };

  const onFailure = (response: any) => {
    console.log(response);

    dispatch(setError({ message: 'Login failure' }));
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: 'offline',
  });
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          onClick={signIn}
        >
          <Iconify
            icon="eva:google-fill"
            color="#DF3E30"
            width={22}
            height={22}
          />
        </Button>
        <FacebookLogin
          cssClass="facebook-login-wrapper"
          appId={FacebookAppId}
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
