var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	// Set the path to "/pcp" for both local development and production.
	//publicPath: '/ircc',
	pluginOptions: {
		i18n: {
			locale: 'en',
			fallbackLocale: 'en',
			localeDir: 'locales',
			enableInSFC: true
		}
	},
	configureWebpack: {
		devtool: 'source-map',
		plugins: [
			new StyleLintPlugin({
				files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}']
			})
		]
	},
	/*
	 * This webpack i18n config is required because the i18n plugins are migrating from @kazupon to @intlify and
	 * not all are done.  Some i18n plugins still have old references and cause the error
	 * "Module not found: Error: Can't resolve '@kazupon/vue-i18n-loader'".  When the migrations are completed
	 * and we have the plugins updated in the project, this chainWebpack config can be removed.
	 */
	chainWebpack: config => {
		config.module
			.rule('i18n')
			.resourceQuery(/blockType=i18n/)
			.type('javascript/auto')
			.use('i18n')
			.loader('@intlify/vue-i18n-loader');
	}
};
