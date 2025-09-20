const data=["Manc:10", "Liver:10", "Edin:10", "Carli:10", "iamverylong:10", "shrt:10"];
let sum=0;
for(const splited_datas of data){

    const new_split = splited_datas.split(":");
    const name=new_split[0];
    const price=Number(new_split[1]);
 
    console.log(`${new_split[0]} - $${price}`);
     
    sum+=price;
}
console.log(sum);