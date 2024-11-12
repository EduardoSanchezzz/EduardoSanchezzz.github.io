import { useRouteError } from "react-router-dom";
import home from './assets/home-icon.png'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href='/'><img src={home} className='logo' alt='Home Icon' /></a>
    </div>
  );
}