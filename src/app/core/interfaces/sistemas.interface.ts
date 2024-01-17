export interface ISistemas {
  acceso?: string,
  datos?: {
    contactos?: [
      direccio: string,
      mail: string,
      orden: number,
      subtitulo: string,
      telefonos: {
        caracteristicas: string,
        numeros: string[]
      },
      titulo: string,
      ubicacion: string
    ]
  },
  descripcion?:string,
  entidad?:string,
  entidadCorto?:string,
  logo?:string,
  nombre?:string,
  nombreCorto?: string
}