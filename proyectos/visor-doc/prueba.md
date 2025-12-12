# 🧪 Archivo de Prueba para Omega Suite

Bienvenido al archivo de prueba. Este documento está diseñado para verificar el renderizado de **Marked.js** y el resaltado de sintaxis de **Prism.js**.

---

## 1. Estilos de Texto y Tipografía

Podemos escribir texto en **negrita**, en *cursiva*, o combinando ***ambas cosas***.
También soportamos texto ~~tachado~~ y `código en línea` para comandos rápidos.

> **Nota:** Esto es una cita en bloque (Blockquote).
> Debería tener un borde lateral de color acento y el texto un poco más suave.
> > También soportamos citas anidadas.

---

## 2. Listas y Tareas

### Lista Desordenada
* Elemento 1
* Elemento 2
  * Subelemento 2.1
  * Subelemento 2.2
    * Nivel 3 de profundidad

### Lista Ordenada
1. Primer paso
2. Segundo paso
3. Tercer paso

### Lista de Tareas (GMF)
- [x] Instalar dependencias
- [x] Configurar PDF.js
- [ ] Implementar modo oscuro
- [ ] Finalizar estilos CSS

---

## 3. Pruebas de Código (Syntax Highlighting)

Aquí probamos si **Prism.js** está funcionando correctamente con diferentes lenguajes.

### JavaScript
```javascript
function saludar(nombre) {
    const mensaje = `Hola, ${nombre}!`;
    console.log(mensaje);
    return true;
}

// Prueba de evento
document.getElementById('btn').addEventListener('click', () => {
    alert("Omega Suite v6 funcionando");
});