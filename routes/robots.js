
const robotsCtrl = require('../controllers/robots');

module.exports = (app) => {

    app.get('/api/robots', robotsCtrl.index);
    app.post('/api/robots', robotsCtrl.store);
    app.put('/api/robots/:id', robotsCtrl.update);
    app.delete('/api/robots/:id', robotsCtrl.destroy);

}



