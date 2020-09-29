import React, { useRef, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { useApi } from '../../API';
import List from '../../components/Videos/List';
// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import { objectIsEmpty } from '../../utils/fns';

function HomePage() {
  // const history = useHistory();
  const sectionRef = useRef(null);
  const [querySearch, setQuerySearch] = useState(null);
  const { isLoading, data } = useApi('search', querySearch);
  // const [isLoading, data] = [false, []];

  function search(event) {
    event.preventDefault();
    setQuerySearch(event.target.querySearch.value);
    // console.log(querySearch);
    // const { _isLoading, _data } = useApi('search', querySearch);
    // setIsLoading(_isLoading);
    // setData(_data);
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <div className="ui two column centered grid">
        <div className="column centered">
          <h1>Video listing</h1>
        </div>
      </div>
      <div className="ui two column centered grid">
        <div className="column centered">
          <form onSubmit={search} className="ui form">
            <div className="field">
              <div className="ui massive action input" data-children-count="1">
                <input type="text" id="querySearch" placeholder="Search..." />
                <button type="submit" className="ui red  button">
                  <i className="white search icon big" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {isLoading ? <div>loading...</div> : null}
      {!objectIsEmpty(data) ? (
        <>
          <List isLoading={isLoading} data={data} />
          {/* {data.prevPageToken && <button type="button">Previous</button>}
          {data.nextPageToken && <button type="button">Next</button>} */}
        </>
      ) : (
        <div>Not found videos</div>
      )}
    </section>
  );
}

export default HomePage;
