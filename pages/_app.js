import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <h1>Header! {currentUser.email}</h1>
      <Component {...pageProps} />
    </div>
  );
};

// distribute currentUser to Header and LandingPage
// We need two things from appContext -
// 1: forward headers from the req object in build client since they contain {host: 'ticketing.dev'} and cookies
// 2: call getInitialProps on Landing page
AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentUser');
  let pageProps = {};
  if (appContext?.Component?.getInitialProps) {
    // call getInitialProps on LandingPage, because by default Next only calls one
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  //pageProps and data === same currentUser obj
  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
