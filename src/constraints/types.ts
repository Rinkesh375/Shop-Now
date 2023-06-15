/*

"ratings": 4.2,
"reviews": "28k",
"image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg",
"brand": "Roadster",
"title": "Men Cotton Pure Cotton T-shirt",
"size": "L",
"discountprice": 299,
"price": 499,
"discountPercentage": "(40% OFF)",
"id": 1,
"isNew": true,
"assured": true,
"gender": "male"
*/

export interface ProductObj{
    ratings:number;
    reviews:string;
    image:string;
    brand:string;
    title:string;
    size:string;
    discountprice:number;
    price:number;
    discountPercentage:string;
    id:number;
    isNew:boolean;
    assured:boolean;
    gender:string 
    
}

export interface ProductState {
    productArr:ProductObj[];
    isError:boolean;
    isLoading:boolean

  
}