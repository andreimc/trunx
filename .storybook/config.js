import { configure } from '@storybook/react'

import { setOptions } from '@storybook/addon-options'

import 'bulma/css/bulma.css'

import { name } from '../package.json'

setOptions({
  name,
  url: `https://npmjs.org/package/${name}`
})

function loadStories () {
  require('../src/stories/overview.js')
  require('../src/stories/modifiers.js')
  require('../src/stories/columns.js')
  require('../src/stories/layout.js')
  require('../src/stories/form.js')
  require('../src/stories/elements.js')
  require('../src/stories/components.js')
}

configure(loadStories, module)
