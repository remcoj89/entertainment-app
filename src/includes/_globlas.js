import _ from 'lodash'

function registerComponents(app, componentContext) {
  Object.entries(componentContext).forEach(([path, module]) => {
    const componentName = _.upperFirst(
      _.camelCase(
        path
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )
    app.component(componentName, module.default)
  })
}

export default {
  install(app) {
    const baseComponents = import.meta.glob('../components/base/*.vue', {
      eager: true
    })
    const layoutComponents = import.meta.glob('../components/layout/*.vue', {
      eager: true
    })
    const iconComponents = import.meta.glob('../assets/icons/*.vue', {
      eager: true
    })

    // Register Base Components
    registerComponents(app, baseComponents)
    // Register Layout Components
    registerComponents(app, layoutComponents)
    // Register Icon Components
    registerComponents(app, iconComponents)
  }
}
