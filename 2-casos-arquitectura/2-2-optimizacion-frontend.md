# Optimización Frontend

## ¿Cómo lo solucionarías?

- Revisar si no hay operaciones `fetch()` repetidas, ya que aveces se obtiene la misma data en diferentes componentes.
- Hacer "lazy fetch". Obtener los datos "a demanda". Solo obtener los datos cuando el usuario los necesite.

## ¿Qué técnicas o tecnologías usarías?

- Detectar cuando el componente entre en la pantalla, para hacer fetch de la data.
- Tener un seguimiento de cuales son las pantallas a las que mas entra el usuario, entonces de entrada hacer fetch de esos datos.

## ¿Qué herramientas usarías para detectar los cuellos de botella?

- La pestaña de network que los navegadores proveen para por visualizar las peticiones realizadas por el cliente.
- Sentry: Herramienta que se utiliza para monitoreo de las aplicaciones.  
