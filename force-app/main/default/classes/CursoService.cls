public with sharing class CursoService {
   @AuraEnabled(cacheable=true)
   public static List<Curso__c> getAllCurso() {
    return [
        SELECT Id, Name, Description__c, Image_URL__c, Location__c
        FROM Curso__c
    ];
   }
}
