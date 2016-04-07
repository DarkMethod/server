var tool = require('cloneextend'),
    conf = {};
    conf.production = {
        application:    {
            errorHandler: {}
                   },
        server:         {
            port        : '80'
        },
		db:             {
            mysql:          {
                host        : 'http://52.34.0.42/',
                user        : 'root',
                password    : 'swah1l1',
                database    : 'yedupudi'
            }
        },
		frontend:		{
			folders		: ['../','../dist',]
		}
    };
    conf.development = {
        db:             {
            mysql:          {
                host        : '127.0.0.1',
                user        : 'root',
                password    : 'swah1l1',
                database    : 'yedupudi'
            }
        },
        application:    {
            errorHandler: { dumpExceptions: true, showStack: true }
        },
		frontend:		{
			folders		: ['../../client_v2','../../client_v2/LAYOUT-2']
		}
    };
    conf.defaults = {
        application:    {
            salt        : '1234567890QWERTY',
            username    : 'clangton',
            password    : 'GR+adJAdWOxFQMLFHAWPig==',
            realm       : 'Authenticated',
            routes      : ['user'],
            middleware  : ['compress','json','urlencoded','logger']
        },
        server:         {
            host        : 'localhost',
            port        : 3000
        }
    };

exports.get = function get(env, obj){
    var settings = tool.cloneextend(conf.defaults, conf[env]);
    return ('object' === typeof obj) ? tool.cloneextend(settings, obj) : settings;
}