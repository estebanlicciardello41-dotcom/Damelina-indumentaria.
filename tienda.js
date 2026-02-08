let productos = JSON.parse(localStorage.getItem("productos")) || [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarProductos() {
    const cont = document.getElementById("productos");

    if (!cont) {
        console.error("No existe el div #productos");
        return;
    }

    if (productos.length === 0) {
        cont.innerHTML = "<p>No hay productos cargados</p>";
        return;
    }

    cont.innerHTML = "";

    productos.forEach((p, i) => {
        cont.innerHTML += `
        <div class="producto">
            <img src="${p.imagenes[0]}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>
            <p>Stock: ${p.stock}</p>
            <button onclick="agregar(${i})">Agregar</button>
        </div>`;
    });
}

function agregar(i) {
    carrito.push(productos[i]);
    productos[i].stock--;

    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarProductos();
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();
});
