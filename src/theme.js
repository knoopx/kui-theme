import React from 'react'
import { observer, inject } from 'mobx-react'
import { merge } from 'lodash'

export default function theme(key, propTypes) {
  return Component => (
    @inject('theme')
    @observer
    class extends React.PureComponent {
      static displayName = `@theme(${Component.name})`
      static propTypes = propTypes

      render() {
        const { theme, ...props } = this.props
        return <Component {...merge({}, theme[key], props)} />
      }
    }
  )
}
