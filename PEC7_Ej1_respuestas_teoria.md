# Ejercicio 1: Preguntas teóricas

## a) ¿Qué es y cómo funciona el elemento <RouterOutlet>?

Router outlet es una etiqueta especial de Angular que nos da un contenedor en el que inyectar un componente u otro dependiendo de la ruta de la SPA en la que nos encontremos. Similar a `<router-view>` de `vue-router`.

## b) ¿Para qué se utilizan las directivas routerLink y routerLinkActive? ¿Existen más directivas relacionadas con el router?

RouterLink nos permite realizar un enlace entre las distintas rutas que inyectarán el componente destino en RouterOutlet. RouterLinkActive sería el enlace de navegación activo en ese momento.

Además de las directivas de este punto y RouterOutlet, tenemos disponible RouterLinkWithHref, que soporta atributos href y target, nos serviría para enlaces externos a la SPA.

## c) ¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios? Describe algunos de los métodos más importantes por los que están compuestos.

Angular Router es un servicio que muestra una vista de componente particular para una URL dada. El Router interpreta la URL en el navegador y maneja la navegación hacia el componente configurado. Después del final de cada ciclo de vida de navegación sin fallos, el router construye un árbol de objetos ActivatedRoute que componen el estado actual del router.

AcivatedRoute en un servicio inyectable que proporciona acceso a información sobre una ruta asociada a un componente, como la ruta de ruta y los parámetros URL del componente.

## d) ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular (consulta para ello la documentación oficial de Angular)

Los Guards en Angular son métodos que se ejecutan antes de cargar una ruta y determinan si se puede cargar dicha ruta o no. Existen 4 tipos diferentes de Guards (o combinaciones de estos) que son los siguientes:

- `CanActivate`, Antes de cargar los componentes de la ruta.
- `CanLoad`, Antes de cargar los recursos (assets) de la ruta.
- `CanDeactivate`, Antes de intentar salir de la ruta actual (usualmente utilizado para evitar salir de una ruta, si no se han guardado los datos).
- `CanActivateChild`, Antes de cargar las rutas hijas de la ruta actual.

## e) ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy? ( https://angular.io/guide/lazy-loading-ngmodules )

La carga asíncrona o lazy de módulos, tanto en Angular como en ReactJS y VueJS es la forma de cargarlos en el momento de su uso, sin estar añadido con el resto de la aplicación transpilada. Esto permite que la primera carga del JS de cualquier SPA ocupe menos y tarde, por tanto, menos en cargar al usuario final.

En Angular, de la misma forma que en VueJS, se cargan asíncronamente los módulos (componentes en el caso de Vue) con una _arrow_ _function_ que, cuando se ejecuta, realiza el import del módulo deseado. Esto hace que se llame al JS transpilado y se cargue al finalizar ésta. 

Del ejemplo de la documentación de Angular:

`loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)`

## f) ¿Qué es/para qué son útiles los middlewares en el contexto de node.js? ¿Dónde estás usando middlewares en nuestra aplicación?

Los middleware son componentes que se ejecutan de manera intermedia antes de determinadas acciones y devuelve true o false si el siguiente elemento se debe ejecutar. 

Por la forma de ejecutarse creo que RxJS actúa en forma de middleware.