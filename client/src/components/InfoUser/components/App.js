import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "./Layout";
import { Index } from "./Index";
import { User } from "./User";
import { NotFound } from "./NotFound";
import users from "../data/users";

const renderIndex = () => <Index users={users} />;
const renderUser = ({ match, staticContext }) => {
  const id = match.params.id;
  const user = users.find(current => current.id === id);
  if (!user) {
    return <NotFound staticContext={staticContext} />;
  }
  return <User user={user} users={users} />;
};

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" render={renderIndex} />
      <Route exact path="/user/:id" render={renderUser} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
