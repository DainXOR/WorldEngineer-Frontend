import { Route, Navigate } from '@solidjs/router';


function Redirect(props) {
  return <Route path={props.from} component={() => <Navigate href={() => props.to} />} />;
}

export default Redirect;