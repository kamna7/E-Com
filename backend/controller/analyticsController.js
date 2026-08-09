  import express from 'express'
  import User  from '../modals/User.js'
  import  Order from '../modals/Order.js'
  import  Product from '../modals/Product.js'



 const getAdminStats = async(req, res)=>{
try{
    const totalUsers = await User.countDocuments({role:'user'});
    const totalOrders = await Order.countDocuments({});
    const totalProducts = await Product.countDocuments({});


    const orders = await Order.find({});
    const totalRevenueData = orders.reduce((acc , order)=> acc + order.totalAmount , 0 )
res.json({totalUsers,totalOrders,totalProducts,totalRevenue:totalRevenueData})
}
catch(error){
res.status(500).json({message: 'eror fetching state' , error})
    }
 }
 export default getAdminStats;