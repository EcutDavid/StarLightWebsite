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
		const isCn = checkIsCn()

		let heroClass = thumbnail ? "hero_thumbnail" : "hero";

		return (
			<Page>
				<div styleName={heroClass} style={bg}>
					<div styleName="wrapper tight">
						<h1 styleName="title">
							{ isCn ? "聚星戏剧俱乐部" : "Starlight Drama" }
						</h1>
						<h4 styleName="subtitle">
							{ isCn ? "提供一个有趣和互动的方式来学习练习英语" : "Providing a fun and interactive way of learning and practicing English" }
						</h4>
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

function checkIsCn() {
	return location.search.indexOf('lang=ch') !== -1
}

function getHomePagePostName() {
	return checkIsCn() ? "home-page-ch" : "home-page"
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
