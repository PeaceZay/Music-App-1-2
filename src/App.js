import './App.css';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { positions } from '@mui/system';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <CssVarsProvider 
    
    sx={{
      textAlign: 'center',
      maxWidth: 400,
      mx: 'auto'
    }}
    
    >
      <Sheet variant="outlined">Music App</Sheet>
      <Sheet
        sx={{
          textAlign: 'center',
          maxWidth: 400, 
          mx: 'auto', // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
      >
        Welcome to the Music App
      </Sheet>



      <Sheet>
        <div>
          <Typography level="h4" component="h1"

            // sx={{
            //   textAlign: 'center',
            //   maxWidth: 400,
            //   mx: 'auto'
            // }}

          >

            <b>Sign In</b>
          </Typography>
          <Typography level="body2"

            // sx={{
            //   textAlign: 'center',
            //   display: 'flex',
            //   maxWidth: 400,
            //   mx: 'auto'
            // }}

          >Sign in to continue</Typography>
        </div>
      </Sheet>



      <TextField
        // sx={{
        //   textAlign: 'center',
        //   maxWidth: 400,
        //   mx: 'auto'
        // }}
        // html input attribute
        name="email"
        type="email"
        placeholder="johndoe@email.com"
        // pass down to FormLabel as children
        label="Email"
      />
      <TextField
        // sx={{
        //   textAlign: 'center',
        //   maxWidth: 400,
        //   mx: 'auto'
        // }}
        name="password"
        type="password"
        placeholder="password"
        label="Password"
      />

      <Button className='logIn'

      // sx={{ 
        
      //   alignSelf: 'center',
      //   textAlign: 'center',
      //   mx: 'auto',
      //   mt: 1,
      //    // margin top
      // }} 
      >
        Log in
      </Button>

      <Typography

        endDecorator={<Link href="/sign-up">Sign up</Link>}
        fontSize="sm"
        // sx={{
        //   textAlign: 'center',
        //   maxWidth: 400,
        //   mx: 'auto'
        // }}
      >
        Don't have an account?
      </Typography>


    </CssVarsProvider>
  );
}










export default App;
