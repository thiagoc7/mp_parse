import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../../actions/reddit'
import Picker from './Picker'
import Posts from './Posts'

@connect((state) => {
  const { selectedReddit, postsByReddit } = state
  const {
      isFetching,
      lastUpdated,
      items: posts
      } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
})
export default class Reddit extends Component {

  static propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedReddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedReddit))
    }
  }

  handleChange(nextReddit) {
    this.props.dispatch(selectReddit(nextReddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedReddit } = this.props
    dispatch(invalidateReddit(selectedReddit))
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  render() {
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props
    return (
        <div>
          <Picker value={selectedReddit}
                  onChange={this.handleChange.bind(this)}
                  options={[ 'reactjs', 'frontend' ]} />
          <p>
            {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
            }
            {!isFetching &&
            <a href='#'
               onClick={this.handleRefreshClick.bind(this)}>
              Refresh
            </a>
            }
          </p>
          {isFetching && posts.length === 0 &&
          <h2>Loading...</h2>
          }
          {!isFetching && posts.length === 0 &&
          <h2>Empty.</h2>
          }
          {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
          }
        </div>
    )
  }
}