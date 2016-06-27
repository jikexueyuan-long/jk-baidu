//启用 fis-spriter-csssprites 插件
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});
// 加 md5
fis.match('*.{js,css,png}', {
  useHash: true
});
fis.match('defaultIcon1229.png', {
  useHash: null
});
fis.match('images/logo_white.png', {
  useHash: null
});
fis.match('*.js', {
  useSprite: true,
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});
 fis.match('*.html', {
   useSprite: true,
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('html-minifier')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

//文件的合并
fis.config.set('modules.postpackger','simple');
fis.config.set('pack',{
	'/pkg/lib.js':[
        'js/index.js',
        'js/first.js',

	],
	'pkg/aio.css':[
       'css/first.css',
       'css/tv.css',
       'css/novel.css',
       'css/shopping.css'
  ]
});
fis.config.set('settings.postpackager.simple.autoCombine',true);