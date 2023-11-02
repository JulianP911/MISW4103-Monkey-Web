# Pruebas automatizadas - Bono 1

### Instrucciones para correr el Monkey Web - "Los Estudiantes"

A continuación, se detalla dos formas posibles para correr el monkey web:

<strong>Importante:</strong> Si va correr el monkey web por consola es necesario tener instalado npx.

<ol>
  <li><strong>Por consola</strong>, pasos a seguir para la ejecución:</li>
  <ul>
    <li>Abrir una terminal en la ubicación del proyecto.</li>
    <li>Ingresar el comando <code>sudo npx install</code> para descargar las dependencias necesarias para la ejecución del monkey web.</li>
    <li>Ingresar el comando <code>sudo npx cypress run</code> para ejecutar el monkew web.</li>
  </ul>
  <li><strong>Por interfaz de cypress:</strong></li>
  <ul>
    <li>Abrir una terminal en la ubicación del proyecto.</li>
    <li>Ingresar el comando <code>sudo cypress open</code> o <code>cypress open</code> para abrir la interfaz gráfica de cypress.</li>
    <li>Una vez se despliega la interfaz de cypress seleccionar la opción <code>E2E Testing</code> y luego la opción de navegador correspondiente <code>chrome</code></li>
    <li>Ir a la carpeta de <code>cypress/e2e</code> y dar click en el archivo <code>monkey_testing.cy.js</code> el cual ejecutará el monkey web.</li>
  </ul>
</ol>

### Comprobante de ejecución correcta del Monkey Web - "Los Estudiantes"

A continuación, se presenta una imagen correspondiente a la ejecución exitosa del Monkey Web por consola: 

<img width="708" alt="Screenshot 2023-11-01 at 8 18 57 PM" src="https://github.com/JulianP911/Monkey-Web/assets/60160654/0087ccaa-60f8-4a70-89ee-661306d89187">

A continuación, se presenta un video correspondiente a la ejecución exitosa del Monkey Web por interfaz de cypress: 

https://github.com/JulianP911/Monkey-Web/assets/60160654/69257562-2be1-468a-aae6-1beb473d0384
