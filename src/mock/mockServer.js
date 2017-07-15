import Mock from 'mockjs'
import apiData from './data.json'

Mock.mock('/api2/home',{
  code:0,
  data:apiData.home
})

Mock.mock('/api2/allproducts',{
  code:0,
  data:apiData.allproducts
})

