const { json } = require("express");

const baseUrl = 'https://api.paystack.co/';
const transList = 'transaction';
const initializeTrans = 'transaction/initialize';
const verifyTrans = 'transaction/verify/'

const key = process.env.paystack_sk;
console.log(key);
  
const optionsGet = {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': key }
}




const transactionList = async (req,res)=>{
    
    const api = await fetch(baseUrl + transList,optionsGet);
    const data = await api.json();

    if(api.ok){
    try {
        res.json(data.data);
        
    } catch (error) {
        console.log(error);
    }}
    else{
        res.send(data);
    }
}

const initializeTransaction = async (req,res)=>{

    const{email,amount} = req.body;
    const optionsPost ={
        method: 'POST',
        headers:{
            // 'Content-Type': 'application/json',
            'Authorization': key 
    
        },
        body: JSON.stringify({
            "email": req.body.email,
            "amount": req.body.amount
        })
    }

    

    const api = await fetch(baseUrl+initializeTrans,optionsPost);
    const data = await api.json();
    if(api.ok){
        try{
            res.json(data);
        }catch(error){
            console.log(error)
        }
    }else{
        res.send(data);
    }

}
const verifyTransaction = async (req,res)=>{

    const reference =  req.params.reference;

    const api = await fetch(baseUrl + verifyTrans + reference,optionsGet);
    const data = await api.json();

    if(api.ok){
    try {
        res.json(data.data);
        
    } catch (error) {
        console.log(error);
    }}
    else{
        res.send(data);
    }

}

module.exports = {transactionList,initializeTransaction,verifyTransaction};
