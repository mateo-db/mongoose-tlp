## Mongoose

- Método para actualizar:
  - `updateOne`: primer parametro cualquier propiedad (incluso por el id), segundo parametro es lo que voy a actualizar
  - La diferencia es que devuelve información sobre la acción que se hizo vs `findByIdAndUpdate`
  - Si queremos que nos devuelva la data, usamos la propiedad `findbyIdAndUpdate`
- Métodos para eliminar:
  - Para eliminar no solicito nada del body, solo uso el ID y se lo mando al `findByIdAndDelete`

## Propiedas Embebidas

- Investigar forma de que Mongoose valide un ARRAY entrante.
- Investigar como Express Validator puede validar o sanitizar arrays de objetos entrantes
- Investigar como traer datos referenciados desde la otra colección que no tiene la referencia, desde rol lo relacione por referencia desde user, desde user puedo traer los roles, ahora yo quiero traer los users desde rol, y validar los arrays entrantes-
- Investigar problema si yo agrego más roles a un usuario al que ya agregué roles previamente
- Cuando defino arreglo en schema, cuando yo no le mando por petición que no se guarde como vacio el arreglo de objetos
- Si agrego roles, debo investigar que lo que voy a agregar ya no exista previamente
