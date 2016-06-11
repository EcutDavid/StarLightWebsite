import React from 'react';
import Relay from 'react-relay';
import Page from '../pages/page.js';
import PostContent from '../posts/PostContent';

class FrontPageLayout extends React.Component {
	render(){
		const { post_title, post_content, thumbnail } = this.props.viewer.page;
		const { variables } = this.props.relay;
		let bg = {
			backgroundImage: "url('" + thumbnail + "')"
		}

		let heroClass = thumbnail ? "hero_thumbnail" : "hero";

		return (
			<Page>
				<div styleName={heroClass} style={bg}>
					<div styleName="wrapper tight">
						<h1 styleName="title">Starlight Drama</h1>
						<h4 styleName="subtitle">Language learning for children</h4>
					</div>
				</div>

				<div styleName="content">
					<div styleName="wrapper tight">
						<PostContent post_content={post_content}/>
					</div>
				</div>
			</Page>
		)
	}
}

function getHomePagePostName() {
	console.log(location.search);
	if (location.search.indexOf('lang=ch') !== -1) {
		return "home-page-ch"
	}
	return "home-page"
}

export default Relay.createContainer(FrontPageLayout, {

	initialVariables: {
    page: getHomePagePostName()
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        page(post_name:$page){
					id,
					post_title
					post_content
					thumbnail
				},
				settings{
					id
					uploads
				}
      }
    `,
  },
});
