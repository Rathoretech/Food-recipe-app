import React from 'react'
import { useState,useEffect } from 'react'

const Learning = (url) => {
const [loading,setLoading]=useState(false)
const[errro,setError] =useState(null)
const[data,setData] =useState(null);

useEffect(()=>{
if(!url)return;

const getApi =async()=>{
try{
setLoading(true)
setError(null)
const response=await fetch(url);
if(!response.ok){
throw new Error("something went wrong")

}
const result = await response.json()
setData(result)

}catch(error){
    
}

} 
getApi();

},[url])


  return;{
    loading,errro,data
  } 
    
      
    
}

export default Learning

