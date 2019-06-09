import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const About = () => (
  <StaticQuery
    query={graphql`
    query AboutQuery {
      allContentfulAbout {
        edges {
          node {
            gamesWePlay {
              id
              title
              fixed(width: 250) {
                src
              }
            }
          }
        }
      }
      allContentfulAboutDescriptionTextNode {
        edges {
          node {
            description
          }
        }
      }
    }
    `}
    render={data => {
        const GameList = () => (
        <div style={{display: `grid`, gridTemplateColumns: `repeat(3, 1fr)`, alignItems: `center`, justifyItems: `center`}}>
          { data.allContentfulAbout.edges[0].node.gamesWePlay.map( g => {
            return (
              <img key={g.id} src={g.fixed.src} alt={g.title}/>
            )
          })}
        </div>
        )

        return (
          <>
            <h2>About</h2>
            <p>{data.allContentfulAboutDescriptionTextNode.edges[0].node.description}</p>
            <h2>Games We're Active In</h2>
            <GameList />
          </>
        )
      } 
    }
  />
)

export default About;