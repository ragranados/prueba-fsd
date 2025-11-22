# Autenticación

## ¿Qué rutas necesitas?

- `/register`: Para registrar un nuevo usuario
- `/login`: Para poder iniciar sesion
- `/logout`: Cerrar Sesion (invalidar tokens)
- `/refresh`: Refrescar el token de corta duracion
- `/me`: Obtiene la informacion del perfil de usuario

## ¿Cómo protegerías rutas privadas? y ¿Cómo manejarías la expiración del token?

Con un middleware que se debe agregar a las rutas protegidas. Este middleware seria el encargado de verificar que el token de corta duración siga activo, de los contrario se mandar en la respuesta que el token ha expirado y renovarlo usando el token de larga duracion. Si ambos han expirado, es cuando se desloguea al usuario.

`Token corta duración`: Contiene la información del usuario necesaria obtener el resto de datos del usuario. Asi mismo la informacion de duración del mismo token.

`Token de larga duración`: Solo se encarga de refrescar el token de corta duración. Solo contiene información minima del usuario.

La razon de que hayan dos tokens es que el usuario no tenga que desloguearse cada poco tiempo, y en caso de que el token de corta duración se interceptado, sea un token que se invalide rapidamente.  
