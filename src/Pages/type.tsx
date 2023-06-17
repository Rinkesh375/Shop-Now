 export interface IArticle{
    id:number;
    first_name:string;
    last_name: string;
     email: string;
    password: string;
}
 export interface Articlestate{
        articles:IArticle[]
}
 export type Articleaction ={
    type:string;
    article:IArticle[]
 }
 export  type DispatchType=(args:Articleaction)=>Articleaction