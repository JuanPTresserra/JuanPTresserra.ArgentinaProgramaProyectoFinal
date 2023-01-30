fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(datos => {
        datos = datos.results[0];
        console.log(datos)

        //Se agrega la imagen
        const image = datos.picture.large;
        const img = document.querySelector('.foto img');
        img.src = image;

        //Se agrega el dato de nombre completo
        const fullname = datos.name.first+' '+datos.name.last;
        const pNombreApellido = document.querySelector('.nombre__apellido__dato');
        pNombreApellido.textContent = fullname;

        //Se agrega la edad
        const edad = datos.dob.age;
        const pEdad = document.querySelector('.edad__dato');
        pEdad.textContent = edad;

        //Se agrega la nacionalidad
        const nacionalidad = datos.location.country;
        const pNacionalidad = document.querySelector('.nacionalidad__dato');
        pNacionalidad.textContent = nacionalidad;

        //Se agrega el email
        const email = datos.email;
        const pEmail = document.querySelector('.email__dato');
        pEmail.textContent = email;

        //Se agrega el genero
        const genero = datos.gender;
        const pGenero = document.querySelector('.genero__dato');
        pGenero.textContent = genero;

        //Se agrega la telefono
        const telefono = datos.phone;
        const pTelefono = document.querySelector('.telefono__dato');
        pTelefono.textContent = telefono;

        //Se agrega la nacimiento
        const nacimiento = datos.dob.date;
        const pNacimiento = document.querySelector('.nacimiento__dato');
        const fechaArray = nacimiento.split('T');
        const fechaNacimiento = fechaArray[0];
        const date = new Date(fechaNacimiento);
        console.log(date)
        const dia = date.getDate();
        console.log(dia)
        const mes = date.getMonth();
        console.log(mes)
        const año = date.getFullYear();
        const fechaFormateada = `${dia}/${mes}/${año}`;
        pNacimiento.textContent = fechaFormateada;
    });

    // $(window). height () + 100) < $(document). height () ){

    const buttonScrollTo = document.querySelector(".scrollTo");
    
    // cuando se haga scroll para abajo se muestra el boton para scrolear automaticamente para arriba
    window.onscroll = function (e) {  
        if(window.scrollY > 150){
            buttonScrollTo.style.display = "flex";
        }else{
            buttonScrollTo.style.display = "none";
        }
    } 