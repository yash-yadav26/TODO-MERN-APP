const testView = (req,res)=>{
res.send({status:1 , message:"test-view"})
console.log('test-view');

}
module.exports = testView