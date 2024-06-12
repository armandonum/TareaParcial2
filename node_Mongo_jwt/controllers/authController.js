const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=require('../models/User');

exports.register=async(req,res)=>{
try{
    const{username,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=await User.create({username,password:hashedPassword});
    res.status(201).json({message: 'usuario registrado de manera exitosa',data:newUser});
}catch(error){
    res.status(500).json({error:'error al registrar usuario'});
}

};

 
exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      const contraseña=await User.findOne({password});
      if (!user) {
        return res.status(401).json({ error: 'credenciales invalidos nombre ' });
      }
      const validPassword = await bcrypt.compare(password, contraseña.password);
      // if (!validPassword) {
      //   return res.status(401).json({ error: 'credenciales invalidos contraseña' });
      // }
      const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
      res.json({ message: 'login exitoso', token });
    } catch (error) {
      res.status(500).json({ error: 'error en el login' });
    }
  };