import {toast} from 'react-toastify';


export default function AddProducts(dispatch , updatefilte){

    async function getData(){
        const res = await fetch('https://clean-jersey-seal.cyclic.app/product');
        const data = await res.json();

        let temp = data.map((elem)=>{
            return {...elem}
        })
        updatefilte(temp)
        dispatch({
            type:"ADDDATA",
            payload:temp
        })
    }
    getData()
}

export const Logout = (dispatch)=>{
     dispatch({
        type : "SetLogin",
        payload : false
     })
     makeZero(dispatch);
}


function setActiveCategory(curr , dispatch){
    dispatch({
        type:"SETCAT",
        payload : curr
    })
}

function setSortingOrder(curr , dispatch){

    dispatch({
        type:"SORTINGORDER",
        payload:curr
    })
}


function addToCart(data , dispatch , id){
const actual = {...data , cartStatus:true};

    fetch(`https://clean-jersey-seal.cyclic.app/product/${id}`,{
        method:'PATCH',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            "cartStatus" : true
        })
    })
    dispatch({
        type:"ADD",
        payload:actual
    })
}

function quantityZero(data ,dispatch , id){

        fetch(`https://clean-jersey-seal.cyclic.app/product/${id}`,{
        method:'PATCH',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            "cartStatus" : false
        })
    })

    const newarr = data.filter((elem)=>{
        return elem.id != id
    })

    dispatch({
        type:"DELETE",
        payload:newarr
    })
}

function SetLogin(dispatch , logindata,navigate){
    fetch("https://clean-jersey-seal.cyclic.app/login",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(logindata)
    }).then((res)=>res.json())
    .then((data)=>{
        if(data.token){
            localStorage.setItem("userToken",JSON.stringify(data.token));
            dispatch({
                type:"SetLogin",
                payload:true,
            })
            dispatch({
                type:"SetUser",
                payload:data.data,
            })
            toast.success('Login Success', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setTimeout(()=>{
                    navigate('/')
                },1000)
        }
        else{
            toast.error('Register To login', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    })
}

export const Registration = (data)=>{
   return fetch("https://clean-jersey-seal.cyclic.app/signup",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      })
      .then((res)=>res.json())
      .then((data)=>{
         return data.message;
      })
}

export const DeleteFromCart = (data,index,dispatch)=>{
    data.splice(index,1);
    var NewArr = [...data];
    
    dispatch({
        type : "Delete_From_Cart",
        payload : NewArr,
    })
 }


 export const AddQuantityKey = (data,dispatch)=>{
   const temp = data.map((elem)=>{
    let tem = {...elem , quantity:1}
    return tem;
    })
   dispatch({
    type : "Add_quantity_key",
    payload : [...temp],
   })

 }

 export const DecreaseQuantity = (data,index,dispatch)=>{
     data[index].quantity = data[index].quantity - 1;
     const newArr = [...data];
     dispatch({
        type : "decrease_quantity",
        payload : newArr
     })
 }

 export const IncreaseQuantity = (data,index,dispatch)=>{
    data[index].quantity = data[index].quantity + 1;
    const newArr = [...data];
    
    dispatch({
       type : "increase_quantity",
       payload : newArr
    })
}

export function makeZero(dispatch){

    dispatch({
        type:"makezero",
        payload:[]
    })
}

export {setActiveCategory , setSortingOrder , addToCart , quantityZero , SetLogin};

// https://odd-pleat-cod.cyclic.app/products/${id}