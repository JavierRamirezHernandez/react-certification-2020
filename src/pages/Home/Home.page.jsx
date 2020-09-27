import React, { useRef } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { useApi } from '../../API';
import List from '../../components/Videos/List';
// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import { objectIsEmpty } from '../../utils/fns';

function HomePage() {
  // const history = useHistory();
  const sectionRef = useRef(null);
  const { isLoading, data } = useApi('search');
  // const [isLoading, data] = [false, []];
  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Video listing</h1>

      {isLoading ? <div>loading...</div> : null}
      {!objectIsEmpty(data) ? (
        <>
          <List isLoading={isLoading} data={data} />
          {data.prevPageToken && <button type="button">Previous</button>}
          {data.nextPageToken && <button type="button">Next</button>}
        </>
      ) : (
        <div>Not found videos</div>
      )}

      {/* <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )} */}
    </section>
  );
}

export default HomePage;
