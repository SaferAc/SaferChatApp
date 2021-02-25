const {Router} = require('express');
const router= Router();
const msgCtrl = require('../controllers/message.controller.js');
const userCtrl = require('../controllers/user.controller.js');



router.get('/messages',msgCtrl.getMessages);

router.post('/messages',msgCtrl.createMessage);

router.get('/messages/:id',msgCtrl.getMessage);

router.put('/messages/:id',msgCtrl.editMessage);

router.delete('/messages/:id',msgCtrl.deleteMessage);




router.get('/users',userCtrl.getUsers);

router.post('/users',userCtrl.createUser);

router.get('/users/:id',userCtrl.getUser);

router.put('/users/:id',userCtrl.editUser);

router.delete('/users/:id',userCtrl.deleteUser);

router.get('/usercount',userCtrl.countUsers);





module.exports = router;

