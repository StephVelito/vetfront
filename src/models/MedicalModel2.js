export class MedicalModel2{
    constructor(
      id = null,
      createdAt = null,
      name = null,
      email=null,
      fecha = null,
      hora = null,
      petname = null,
      petplace = null,
      especialidad = null,

   
    ) {
        if (id !== null) this.id = id;
        this.createdAt = !createdAt ? new Date() : new Date(createdAt);
      this.name =name;
      this.email = email;
      this.fecha =fecha;
      this.hora = hora;
      this.petname =petname;
      this.petplace =petplace;
      this.especialidad =especialidad;
 
      
     
    }
  
 
  }

  export default MedicalModel2