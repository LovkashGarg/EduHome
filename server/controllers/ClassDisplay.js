const Classes=require('../Models/Classes');

const ClassDisplay=async(req,res)=>{
   const currentTime=Date.now();
   const allliveclasses = await Classes.find({ classTime: { $gt: currentTime } })
   .sort({ classTime: 1 }) // Sort by classTime in ascending order
   .limit(4); // Limit the result to 4 documents

    // console.log("Here I am " +allliveclasses);
    res.json({
        // success:true,
   data: allliveclasses
        // message:"All live classes recieved"
    })
    console.log("Sent");
}

module.exports=ClassDisplay;