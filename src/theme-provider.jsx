import React from 'react'
import { observable, extendObservable, runInAction } from 'mobx'
import { observer, Provider } from 'mobx-react'

@observer
export default class ThemeProvider extends React.PureComponent {
  @observable theme = {}

  static propTypes = {
    theme: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    extendObservable(this.theme, props.theme)
  }

  componentWillReceiveProps({ theme }) {
    runInAction(() => {
      extendObservable(this.theme, theme)
    })
  }

  render() {
    return <Provider theme={this.theme}>{React.Children.only(this.props.children)}</Provider>
  }
}
