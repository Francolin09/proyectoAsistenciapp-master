export interface Usuario {
    id?:string;
    name:string;
    lastname:string;
    gender:string;
    age:number;
    email:string;
    asignatura:[{
        nombre:string,
        diasTotales:number,
        diasAsistidos:number,        

    }];
    descripcion:string;
    carrera:string;
    sede:string;
    imagen:string; 
}