const GroceryModel = require('../models/grocerySchema')

module.exports.createList = async(req,res) => {
   try {
    const {groceryItem, isPurchased} = req.body
    if(!groceryItem || groceryItem === " "){
       return res.status(400).json({error : "please enter grocery item"})
    }
    const newGrocery = await GroceryModel.create({groceryItem,isPurchased});
    res.status(201).json({message : "Added"})
   } catch (error) {
    res.status(500).json({error : error.message})
   }
}

module.exports.getList = async (req,res) => {
    try {
     const allGrocery = await GroceryModel.find();
     res.status(200).json(allGrocery)
    } catch (error) {
     res.status(500).json({error : error.message})
    }
 }
 
 module.exports.updateList = async(req,res) => {
    try {
     const {_id,isPurchased,groceryItem} = req.body
     if(!groceryItem == " "){
        const updatedGrocery = await GroceryModel.findByIdAndUpdate(_id,{groceryItem,isPurchased},{new : true}) 
        return res.status(201).json({message : "Updated"})
     }else{
        res.status(400).json({error : "please enter details"})
     }
    } catch (error) {
     res.status(500).json({error : error.message})
    }
 }
 module.exports.deleteList = async(req,res) => {
    try {
     const {_id} = req.body
     if(_id){
        const deletegrocery = await GroceryModel.findByIdAndDelete(_id) 
        return res.status(201).json({message : "Deleted"})
     }else{
        res.status(400).json({error : "please enter details"})
     }
    }
    catch (error) {
     res.status(500).json({error : error.message})
    }
 }