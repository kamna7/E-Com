import express from 'express'
import  protect  from '../middleware/authMiddleware.js'
import  admin   from '../middleware/adminMiddleware.js'
 import getAdminStats from '../controller/analyticsController.js'

  const route=  express.Router()

 route.get('/' , protect,admin, getAdminStats)

 export default route