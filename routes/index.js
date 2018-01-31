var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

router.get('/allCake', function *(next) {
    yield this.render('index', {
        title: 'Hello all cake!'
    });
});

router.get('/allCake2', function *(next) {
    yield this.render('index', {
        title: 'Hello all cake 2!'
    });
});

router.get('/test', function *(next) {
    yield this.render('test', {
        title: 'Hello test!'
    });
});
router.get('/header', function *(next) {
    yield this.render('header', {
        title: 'Hello header!'
    });
});
router.get('/footer', function *(next) {
    yield this.render('footer', {
        title: 'Hello footer'
    });
});
router.get('/login', function *(next) {
    yield this.render('login', {
        title: 'Hello login'
    });
});
router.get('/register', function *(next) {
    yield this.render('register', {
        title: 'Hello login'
    });
});
router.get('/product_details', function *(next) {
    yield this.render('product_details', {
        title: 'Hello login'
    });
});
router.get('/napoleon', function *(next) {
    yield this.render('napoleon', {
        title: 'Hello napoleon'
    });
});
module.exports = router;
