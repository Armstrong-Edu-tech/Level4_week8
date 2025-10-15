async function testVirtual(){
  try{
    const user= await User.findOne()
    console.log("Full Name:", user.fullName); // Accessing the virtual property
  }catch(err){
    console.error("Error:", err);
  }
}
testVirtual()