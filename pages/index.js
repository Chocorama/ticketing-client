import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  //   axios.get('/api/users/currentuser');
  console.log(currentUser);
  return <h1>Landing page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  // server - getInitProps runs after refresh, link from page, or url submission
  //code below is coming from client service so headers like cookies dont exist. however, we forward them from req (the browser)
  if (typeof window === 'undefined') {
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentUser',
      {
        headers: req.headers,
      }
    );

    return data;
  } else {
    // else on browser
    // getInitProps runs on client after forwarded from another page on app
    const { data } = await axios.get('/api/users/currentUser');
    return data;
  }
};

export default LandingPage;
