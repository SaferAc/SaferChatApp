const User= require('../models/user');
const userCtrl= {};
const faker= require('faker');


userCtrl.getUsers= async (req,res)=>{

    const users = await User.find();

    res.json(users);

};

userCtrl.getUser= async (req,res)=>{
    const user = await User.findById(req.params.id);
    res.send(user);
};


userCtrl.createUser= async (req,res)=>{
try {
    randomName = faker.name.findName();
    const newUser= new User({name:randomName});

    await newUser.save();
    res.json(newUser);
} catch (error) {
    console.log(error);
}
    

};

userCtrl.editUser= async (req,res)=>{
try {
    
    await User.findByIdAndUpdate(req.params.id,req.body,function(err, result){

        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }

    });
    
} catch (error) {
    console.log(error)
}
    
};


userCtrl.deleteUser= async (req,res)=>{

    await User.findByIdAndDelete(req.params.id);

    res.json({message: 'User Deleted'});

};

userCtrl.countUsers= async (req,res)=>{

    User.count({}, function( err, count){
        console.log( "Number of users:", count );
        res.json(count);
    });

    

};



module.exports = userCtrl;