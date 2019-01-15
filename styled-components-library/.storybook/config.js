import { configure } from '@storybook/react';
import {addDecorator} from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import {theme1, theme2} from '../src/theme'

const themes = [theme1, theme2];
addDecorator(withThemesProvider(themes));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
