import Tour from '../models/Tour.js'

// create new tour
export const createTour = async(req,res)=>{
    const newTour = new Tour(req.body)
    try{
        const savedTour = await newTour.save()
        res.status(200).json({success:true, message:'Successfully created',
    data: savedTour})
    } catch (err){
        res.status(500).json({success:false, message:'failed to create. Try again'});
    }
};

// update tour

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

// get tour by search

export const getTourBySearch = async(req,res)=>{
    const city = new RegExp(req.query.city,'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    try{
        const tours = await Tour.find({ city, distance:{$gte:distance},
        maxGroupsize:{$gte:maxGroupSize}})

        res.status(200).json({success: true,
            
        message: "Succesful",
    data: tours,});
    } catch (err){
        res.status(404).json({
            success: false,
            message: "notfound",
        });

    }
};

// get featured tour
export const getFeaturedTour = async(req, res)=>{


    
    try{
        const tours = await Tour.find({featured:true}).limit(8);

        res.status(200).json({success: true,
        
        message: "Succesful",
    data: tours,});
    } catch (err){
        res.status(404).json({
            success: false,
            message: "notfound",
        });
    }
};
 
// get tour counts

export const getTourCount  = async(req, res)=>{
    try{
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({ success: true, data: tourCount});
    } catch (err){
        res.status(500).json({ success: false, message: "failed to fetch"});
    }
};