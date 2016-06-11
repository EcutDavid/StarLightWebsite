import React from "react";
import Helmet from "react-helmet";

class Head extends React.Component{
  render(){
    return(
      <Helmet
          title="Starlight drama"
          meta={[
              {"name": "description", "content": "Starlight drama"},
              {"property": "og:title", "content": "Starlight drama"},
              {"property": "og:type", "content": "website"},
              {"property": "og:description", "content": "Starlight drama"}
          ]}
          link={[
              {"rel": "canonical", "href": "http://starlightdrama.club"},
          ]}
      />
    )
  }
}

export default Head;
