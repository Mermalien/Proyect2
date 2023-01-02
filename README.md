# App para compartir enlaces

Implementar una API que permita a los usuarios registrarse y compartir
enlaces web que consideren interesantes. Otros usuarios podrán votarlos si
les gustan.

## Endpoints

### Usuarios Anónimos

- POST[/registro] - Registro del usuario.
- POST[/login] - Login de usuario.

### Usuarios Registrados (existe TOKEN)

- GET[/enlaces] - Lista los enlaces.
- POST[/nuevo] - Insertar un nuevo enlace.
- DELETE[/enlaces/:idEnlace] - Elimina un enlace publicado por el usuario.
- POST[/vote/:idEnlace] - Vota un enlace.

--- Opcional:

- PUT[/user/info] - Modifica el nombre, email y biografía del usuario logueado.
- PUT[/user/avatar] - Modifica la imagen de perfil del usuario.
# Proyect2
