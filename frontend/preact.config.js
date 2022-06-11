export default function (config, env, helpers) {
  // enable process on browser
  config.node.process = true;

  // disable CSS modules
  const css = helpers.getLoadersByName(config, "css-loader")[0];
  css.loader.options.modules = false;

  // aliases config
  config.resolve.modules.push(env.src);
  return config;
}
