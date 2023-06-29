// src/user-profile/container.jsx
import { Component } from "react";
import { getUser, likeUser } from "./user";

export default class UserProfile extends Component {
  constructor() {
    this.handleLike.bind(this);
    this.revalidate.bind(this);
  }
  componentDidMount() {
    this.revalidate();
  }
  async revalidate() {
    const user = await getUser();
    this.setState({ user });
  }
  async handleLike() {
    const user = this.state.user;
    await likeUser(user.id);
    this.revalidate();
  }
  render() {
    const user = this.state.user;
    if (!user) return null;
    return <Presentational user={user} handleLike={this.handleLike} />;
  }
}
