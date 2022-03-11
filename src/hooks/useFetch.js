import { useState,useEffect } from "react";


//adding a post method to useFetch hook to add the new form filled data to the JSOn server
export const useFetch=(url,method='GET')=>{ //1-add a GET method
    const [data, setData]= useState(null)
    const[isPending, setIspending]=useState(false)
    const[error, setError]=useState(null)
    const[options,setOptions]=useState(null)//3-create a state for the options to pass into the fetch API later


    const postData=(postData)=>{//2-Create a post function
      setOptions({
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(postData)
      })
    }

    useEffect(()=>{
    const controller=new AbortController()
      const fetchData=async(fetchOptions)=>{
          setIspending(true)

          try{
            const res = await fetch(url,{...fetchOptions,signal:controller.signal})
            const json= await res.json()
            if(res.ok===false){
                throw new Error(res.statusText)
            }

            setIspending(false)
            setData (json)
            setError(null)
          }catch(err){
              if(err.name==='AbortError'){
                  console.log('The fetch was aborted')
              }else{
                setIspending(false)
                setError('Could not fetch data')
                console.log(err.message)
              }
             
          }
        
        }
        if(method==='GET'){
        fetchData()
        }
        if(method==='POST'&& options){
          fetchData(options)
        }
        return()=>{
            controller.abort()
        }
    },[url,options,method])
   
    return {data, isPending, error, postData}//4-add it to the return object
}

//TThe usefetch hook now has a functionality of two---GET and POST


