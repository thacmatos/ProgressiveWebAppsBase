'use strict';

importScripts('js/libs/sw-toolbox/sw-toolbox.js');

toolbox.options.debug = true;

toolbox.router.get('index.htm', toolbox.cacheFirst);
toolbox.router.get('produtos.json', toolbox.cacheFirst);
toolbox.router.get('js/libs/*', toolbox.cacheFirst);
toolbox.router.get('js/loja.js', toolbox.cacheFirst);
toolbox.router.get('js/view/*', toolbox.cacheFirst);
toolbox.router.get('js/icons/*', toolbox.cacheFirst);

toolbox.router.get('*', toolbox.networkFirst);


toolbox.preCache([
	'index.html',
	'js/libs/jquery.js',
	'js/loja.js',
	'produtos.json'
]);