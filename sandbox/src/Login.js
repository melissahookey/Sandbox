import React from "react";

import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=&response_type=code&redirect_uri=localhost:3000&scope=streaming20%user-read-email20%user-read-private20%user-library-read20%user-library-modify20%user-read-playback-state20%user-modify-playback-state";

export default function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login with Spotify
      </a>
    </Container>
  );
}
