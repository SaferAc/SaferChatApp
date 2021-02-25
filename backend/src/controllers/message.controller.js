const Message= require('../models/message');
const msgCtrl= {};


msgCtrl.getMessages= async (req,res)=>{

    const messages = await Message.find();

    res.json(messages);

};

msgCtrl.getMessage= async (req,res)=>{

    const message = await Message.findById(req.params.id);
    res.send(message);


    

};


msgCtrl.createMessage= async (req,res)=>{

    const newMessage= new Message(req.body);
    console.log(newMessage);
    await newMessage.save();

    res.send({message:'Message created'});


};

msgCtrl.editMessage= async (req,res)=>{

    await findByIdAndUpdate(req.params,req.body);
    res.json({message: 'Message Updated'});

};


msgCtrl.deleteMessage= async (req,res)=>{

    await Message.findByIdAndDelete(req.params.id);

    res.json({message: 'Message Deleted'});

};

module.exports = msgCtrl;