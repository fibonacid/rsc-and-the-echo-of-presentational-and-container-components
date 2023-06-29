// src/user-profile/container.jsx
import { Component } from "react";
import { getUser, likeUser } from "../../../shared/user";
import Presentational from "./presentational";

export default class UserProfile extends Component {
  state = { user: null };
  constructor() {
    super();
    this.handleLike = this.handleLike.bind(this);
    this.revalidate = this.revalidate.bind(this);
  }
  componentDidMount() {
    this.revalidate();
  }
  async revalidate() {
    const user = await getUser();
    if (!user) return;
    this.setState({ user });
  }
  async handleLike() {
    const user = this.state.user;
    if (!user) return;
    const optimisticResult = {
      ...user,
      likes: user.likes + 1,
      _optimistic: true,
    };
    this.setState({
      user: optimisticResult,
    });
    await likeUser(user.id);
    this.revalidate();
  }
  render() {
    const user = this.state.user;
    if (!user) return <div>Loading...</div>;
    return <Presentational user={user} handleLike={this.handleLike} />;
  }
}
