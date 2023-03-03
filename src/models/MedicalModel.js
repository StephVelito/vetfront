export class MedicalModel {
    constructor(

      name = null,
      email = null,
      fecha = null,
      hora = null,
      petname = null,
      petplace = null,
      especialidad = null,
      id = null,
      createdAt = null,
   
    ) {

      this.name =name;
      this.email = email;
      this.fecha =fecha;
      this.hora = hora;
      this.petname =petname;
      this.petplace =petplace;
      this.especialidad =especialidad;
      if (id !== null) this.id = id;
      this.createdAt = !createdAt ? new Date() : new Date(createdAt);
      
     
    }
  
 
  }

  export default MedicalModel