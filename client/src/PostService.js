import axios from 'axios';


const URL1 = 'http://localhost:3000/OffreBim';
const URL2 = 'http://localhost:3000/DashBoard/';

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
    static createposts(sendtype , sendadresse , senddetails ,sendfile){
        return axios.post(URL2, {
            sendtype ,
            sendadresse , 
            senddetails ,
            sendfile
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