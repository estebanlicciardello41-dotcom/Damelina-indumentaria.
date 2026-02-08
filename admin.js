function guardarProducto(producto) {
  let productos = JSON.parse(localStorage.getItem("productos")) || [];

  productos.push(producto);

  localStorage.setItem("productos", JSON.stringify(productos));

  alert("Producto guardado correctamente");
}


function agregarProducto() {
    const nombre = document.getElementById("nombre").value;
    const precio = Number(document.getElementById("precio").value);
    const stock = Number(document.getElementById("stock").value);
    const imagenesTexto = document.getElementById("imagenes").value;
    const categoria = document.getElementById("categoria").value;

    if (!nombre || !precio || !stock || !imagenesTexto) {
        alert("Completa todos los campos");
        return;
    }

    const imagenes = imagenesTexto.split(",").map(i => i.trim());

    productos.push({
        nombre,
        precio,
        stock,
        imagenes,
        categoria
    });

    guardar();
    mostrarProductosAdmin();

    // limpiar inputs
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("imagenes").value = "";
}

function mostrarProductosAdmin() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    productos.forEach((p, i) => {
        lista.innerHTML += `
        <li>
            <strong>${p.nombre}</strong> | $${p.precio} | Stock: ${p.stock}
            <button onclick="eliminarProducto(${i})">Eliminar</button>
        </li>`;
    });
}

function eliminarProducto(i) {
    productos.splice(i, 1);
    guardar();
    mostrarProductosAdmin();
}

// MOSTRAR AL CARGAR LA PÁGINA
mostrarProductosAdmin();
const imagenes = inputImagenes.value.split(",").map(i => i.trim());


