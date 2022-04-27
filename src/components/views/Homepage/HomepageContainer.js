import { connect } from "react-redux";
import { fetchPublished } from "../../../redux/postsRedux";
import { HomepageComponent } from "./Homepage";

const mapStateToProps = (state) => ({
  posts: state.posts.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPublished: () => dispatch(fetchPublished()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomepageComponent);
