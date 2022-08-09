import { LightningElement , wire} from 'lwc';
import getAllCur from "@salesforce/apex/CursoService.getAllCurso";
export default class CursoList extends LightningElement {
    

    @wire(getAllCur)
    cursos;

    //curso.data con dato 
    


    /*
    curso = [
        {
            Name: "Matematicas 03 ",
            Description__c: "Curso de mátematicas intermedio",
            Image_URL__c: 
            "https://1.bp.blogspot.com/-MBHX6dMn7v4/ViE8NhafueI/AAAAAAAAMlo/P_q9A9a-DPU/s1600/8%2Bcursos%2Bgratis%2Bmatematicas%2Blogica.jpg",
            Location__c: "Grabado,Online"
        },
        {
            Name: "Matematicas 04 ",
            Description__c: "Curso de mátematicas Avanado",
            Image_URL__c: 
            "https://1.bp.blogspot.com/-MBHX6dMn7v4/ViE8NhafueI/AAAAAAAAMlo/P_q9A9a-DPU/s1600/8%2Bcursos%2Bgratis%2Bmatematicas%2Blogica.jpg",
            Location__c: "Grabado,Online"
        },
        {
            Name: "Matematicas 05 ",
            Description__c: "Curso de mátematicas basico",
            Image_URL__c: 
            "https://1.bp.blogspot.com/-MBHX6dMn7v4/ViE8NhafueI/AAAAAAAAMlo/P_q9A9a-DPU/s1600/8%2Bcursos%2Bgratis%2Bmatematicas%2Blogica.jpg",
            Location__c: "Grabado,Online"
        },
    ];*/
}