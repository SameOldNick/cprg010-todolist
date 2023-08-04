import React from "react";

import logo from "../assets/images/logo.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeContext } from '../components/ThemeContext';

import { Link } from "react-router-dom";

import { Container } from 'reactstrap'

const MainLayout = (props) => {
  const { children } = props;

  const { theme } = React.useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? 'white' : 'black'
  }

  return (
    <>
      <Container fluid className="mt-2" style={styles}>
        <Header className="top-header" id="header" title="This is the header">
          <div>
            <h1>Joe Blow's Website 🚀🐨</h1>

            <div>
              <p>
                <Link to="/fun-fact">Fun Fact</Link>
                <span> | </span>
                <Link to="/todo-list">To Do List</Link>
              </p>
            </div>
          </div>
          <img src={logo} width={55} height={55} />
        </Header>

        {children}

        <Footer />
      </Container>
    </>
  );
};

export default MainLayout;
