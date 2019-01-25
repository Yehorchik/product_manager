var controller = require('./controllers.js');

module.exports = function(app){
    app.get('/api/products',controller.all);
    app.get('/api/products/:id',controller.one);
    app.post('/api/products',controller.create);
    app.put('/api/products/:id',controller.update);
    app.delete('/api/products/:id',controller.delete);
}