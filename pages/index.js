import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import {Container} from 'react-responsive-grid'
import styles from './index.module.css'
import Helmet from 'react-helmet'
import { config } from 'config'
import slackImage from '../assets/img/slack-react-brasil.png'
import logoImage from '../assets/img/react-brasil.svg'

export default class HomePage extends React.Component {
  render () {
    return (
      <Container className={styles['container']}>
        <Helmet title={`${config.siteTitle}`} />
        <img src={logoImage} className={styles['site-logo']} />
        <h1 className={styles['site-title']}>
          React Brasil Slack
        </h1>
        <p>
          Um grupo criado para discutir tudo sobre ReactJS
        </p>
        <img src={slackImage} className={styles['slack-image']} />
        <a href="https://reactconf.com.br/slack" className={styles['button']}>
          Quero participar
        </a>
      </Container>
    )
  }
}

