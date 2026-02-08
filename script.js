let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";

    carrito.forEach((p, i) => {
        lista.innerHTML += `
            <li>
                ${p.nombre} - $${p.precio}
                <button onclick="eliminar(${i})">❌</button>
            </li>
        `;
    });

    document.getElementById("total").innerText = "Total: $" + total;
    document.getElementById("contador").innerText = carrito.length;
}

function eliminar(i) {
    total -= carrito[i].precio;
    carrito.splice(i, 1);
    actualizarCarrito();
}

function toggleCarrito() {
    document.getElementById("carrito").classList.toggle("activo");
}

function buscarProducto() {
    let texto = document.getElementById("buscador").value.toLowerCase();
    let productos = document.querySelectorAll(".producto");

    productos.forEach(p => {
        let nombre = p.dataset.nombre;
        p.style.display = nombre.includes(texto) ? "block" : "none";
    });
}
function agregarCarritoConOpciones(btn, precio) {
    const producto = btn.parentElement;
    const nombre = producto.querySelector("h3").innerText;
    const talle = producto.querySelector(".talle").value;
    const color = producto.querySelector(".color").value;

    carrito.push({ nombre, precio, talle, color });
    total += precio;

    guardarCarrito();
    actualizarCarrito();
}
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
window.onload = () => {
    const guardado = localStorage.getItem("carrito");
    if (guardado) {
        carrito = JSON.parse(guardado);
        total = carrito.reduce((s, p) => s + p.precio, 0);
        actualizarCarrito();
    }
};

<script>
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-productos");

  const productos = JSON.parse(localStorage.getItem("productos")) || [];

  if (productos.length === 0) {
    contenedor.innerHTML = "<p>No hay productos cargados</p>";
    return;
  }

  productos.forEach((p, index) => {
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${p.imagenes[0]}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
        <p>Stock: ${p.stock}</p>
        <button onclick="agregarAlCarrito(${index})">
          Agregar al carrito
        </button>
      </div>
    `;
  });
});
</script>
