import React, { useRef, useState } from 'react';
import {
  Container,
  InputGroup,
  Form,
  FormControl,
  Button,
  Jumbotron,
  Row,
  Col,
  Spinner,
} from 'react-bootstrap';
import { useApi } from '../../API';
import List from '../../components/Videos/List';
import './Home.styles.css';
import { objectIsEmpty } from '../../utils/fns';

function HomePage() {
  const sectionRef = useRef(null);
  const [querySearch, setQuerySearch] = useState(null);
  const { isLoading, data } = useApi('search', querySearch);

  function search(event) {
    event.preventDefault();
    setQuerySearch(event.target.querySearch.value);
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <Jumbotron>
        <Container fluid="md">
          <Row>
            <Col>
              <h1 className="display-1 text-center">Search YouTube</h1>
              <Form onSubmit={search}>
                <InputGroup className="mb-3">
                  <FormControl
                    id="querySearch"
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="basic-addon2"
                    size="lg"
                  />
                  <InputGroup.Append>
                    <Button variant="danger">Search</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid>
        {isLoading ? <Spinner animation="border" variant="danger" size="lg" /> : null}
        {!objectIsEmpty(data) && <List isLoading={isLoading} data={data} />}
      </Container>
    </section>
  );
}

export default HomePage;
