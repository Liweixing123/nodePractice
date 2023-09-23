const queryString = require('querystring');

const handleBlogRoute = require('./src/routes/blog');

// 处理POST数据
const getPostData = (req ,res) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({});
            return
        }

        if (req.headers['content-type'] === 'application/json') { 
            resolve({});
            return
        }

        let postData = '';

        req.on('data', (chunk) => {
            postData += chunk.toString
        })

        req.on('end', () => {
            if (!postData) {
                resolve({});
                return
            }
            resolve(JSON.parse(postData))
        })
    })

    return promise
}

const serverHandler = (req ,res) => {
    res.setHeader('Content-Type', 'application/json');

    const url = req.url
    req.path = url.split('?')[0]

    req.query = queryString.parse(url.split('?')[1])

    getPostData(req ,res).then(postData => {
        req.body = postData

        const blogData = handleBlogRoute(req ,res)
        
        if (blogData) {
            res.end(JSON.stringify(blogData))
            return
        }
    
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('404 Not Found')
        res.end();
    })
}

module.exports = serverHandler