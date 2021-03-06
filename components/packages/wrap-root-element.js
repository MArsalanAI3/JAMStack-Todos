const React = require("react");
const { ThemeProvider }=require( 'theme-ui');
const {Deep} = require('@theme-ui/presets');
// const {Provider}=require('./nelifyIdentity-Context');


const newTheme={
  ...Deep,
  sizes:{container: 1024}
};

module.exports= ({element}) => (
  <ThemeProvider theme={newTheme}>{element}</ThemeProvider>
);