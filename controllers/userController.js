import User from '../models/User.js'

// create new User
export const createUser = async(req,res)=>{
    const newTour = new Tour(req.body)
    try{
        const savedUser = await newUser.save()
        res.status(200).json({success:true, message:'Successfully created',
    data: savedTour})
    } catch (err){
        res.status(500).json({success:false, message:'failed to create. Try again'});
    }
};

// update User

export const updateTour = async(req, res)=>{

    const id = req.params.id
    try{

        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})
        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedTour,
        });
        
    } catch (err){
        res.status(500).json({
            success: false,
            message: "failed to update",
           
    });
}
};
// delete tour
export const deleteTour = async(req, res)=>{
    const id = req.params.id
    try{

         await Tour.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Successfully deleted",
            
        });
        
    } catch (err){
        res.status(500).json({
            success: false,
            message: "failed to delete",
           
    });
}
};

// get single tour
export const getSingleTour = async(req, res)=>{
    const id = req.params.id
    try{

        const tour= await Tour.findByIdAndUpdate(id);
        res.status(200).json({
            success: true,
            message: "Successful",
            data: tour
            
        });
        
    } catch (err){
        res.status(404).json({
            success: false,
            message: "not found",
           
    });
}
};
// get all tour
export const getAllTour = async(req, res)=>{



    // for pagination

    const page = parseInt(req.query.page)
    
    try{
        const tours = await Tour.find({}).skip(page * 8).limit(8);

        res.status(200).json({success: true,
            count: tours.length,
        message: "Succesful",
    data: tours,});
    } catch (err){
        res.status(404).json({
            success: false,
            message: "notfound",
        });
    }
};