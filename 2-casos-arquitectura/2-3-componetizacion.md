# Componentización

## En una aplicación web, tienes un formulario repetido en múltiples páginas. ¿Cómo lo harías reutilizable?

En el caso de react, ya que se basa en la construcción de componentes en la aplicación, crearia un componente formulario que reciba un callback como parametro, ya que, aunque el formulario se repita, puede que la información se utilice de diferente manera. De esta forma, la página que utilize el formulario, decide como utilizar la información.  
