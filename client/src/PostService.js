import axios from 'axios';


const URL1 = 'https://bimporject.herokuapp.com/OffreBim';
const URL2 = 'https://bimporject.herokuapp.com/DashBoard';

class Service{
    static Postinsert(sendname , sendfirstname , sendemail ,sendphone , sendmessage){
        return axios.post(URL1, {
            sendname ,
            sendfirstname , 
            sendemail ,
            sendphone , 
            sendmessage
        });
    }
    
    
    
    
    
    //create posts
    static createposts(sendtype , sendadresse , senddetails ){
        return axios.post(URL2, {
            sendtype ,
            sendadresse , 
            senddetails 
        });
    }

    // //get posts
    // static getposts(){
    //     return new Promise((resolve, reject) => {
    //         (async ()=>{
    //         try {
    //             const res = await axios.get(URL2);
    //             const data = res.data;
    //             resolve(
    //                 data.map(post => ({
    //                     ...post
    //                 }))
    //             );
    //         } catch (err) {
    //             reject(err);
    //         }
    //     })});
    // }



    //delete posts
    static deleteposts(id){
        return axios.delete(`${URL2}${id}`);
    }    

} 


export default Service;