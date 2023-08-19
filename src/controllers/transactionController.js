const url = require('../util/paymentUrl');

const baseUrl= url.baseUrl;

const key = process.env.paystack_sk;
  
const optionsGet = {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': key }
}


const transactionList = async (req,res)=>{
    
    const api = await fetch(baseUrl + url.transList,optionsGet);
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

    

    const api = await fetch(baseUrl+url.initializeTrans,optionsPost);
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

    const api = await fetch(baseUrl + url.verifyTrans + reference,optionsGet);
    const data = await api.json();

    if(api.ok){
    try {
        // const authorisationCode = data.data.authorization.authorizationCode;
        // const email = data.data.customer.email;
        
        res.json(data.data);
        
    } catch (error) {
        console.log(error);
    }}
    else{
        res.send(data);
    }

}

module.exports = {transactionList,initializeTransaction,verifyTransaction};
