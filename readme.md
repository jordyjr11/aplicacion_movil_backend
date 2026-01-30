AOLICACION\_MOVIL



├── backend/

├── accounts/
│   ├──  \_\_int\_\_.py
├── migrations/

│   ├──  \_\_int\_\_.py

│   ├──  0001\_\_initial.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializer.py
│   ├── tests.py
│   ├── urls.py
│   ├── view.py
│

├── backend/
│   ├── \_\_int\_\_.py
│   ├── asgi.py

│   ├── settings.py

│   ├── urls.py

│   ├── wsgi.py

│   ├── db.sqlite3

│   ├── manage.py

│

├── venv/
│   ├── .env

│   ├── requests.http

│   ├──sentting.json



---



&nbsp;Configuración del entorno



**1. Crear entorno virtual:**



python -m venv venv





**Activar entorno virtual:**



\# Windows PowerShell

venv\\Scripts\\activate





**Instalar dependencias:**



pip install -r requirements.txt





**Variables sensibles:**



Crear archivo .env en la raíz si es necesario para configurar DB, secret key, etc.



Por defecto usa SQLite (db.sqlite3) para desarrollo.



&nbsp;Migraciones y base de datos



**Crear migraciones:**



python manage.py makemigrations





**Aplicar migraciones:**



python manage.py migrate





**Crear superusuario (para acceder al admin y agregar Roles):**



python manage.py createsuperuser





**Agregar al menos un Role desde el panel de admin:**



http://127.0.0.1:8000/admin/accounts/role/



&nbsp;**Ejecutar servidor**

**python manage.py runserver**





**Servidor corriendo en:**



http://127.0.0.1:8000/



 **Funcionalidades principales**

**1. Registro de usuario con rol**



POST /api/accounts/register/

Body (JSON):



{

&nbsp; "email": "test@example.com",

&nbsp; "password": "123456",

&nbsp; "role": 1

}



**2. Login**



POST /api/accounts/login/

Body (JSON):



{

&nbsp; "email": "test@example.com",

&nbsp; "password": "123456"

}





Respuesta esperada:



{

&nbsp; "token": Token 018558131f0bd5bd7d832f7ad587feee32a79b0f,

&nbsp; "email": "test@example.com",

&nbsp; "role": "Admin"

}



**3. Dashboard (ruta protegida)**



GET /api/accounts/dashboard/

Headers:



Authorization: Token 018558131f0bd5bd7d832f7ad587feee32a79b0f





**Respuesta esperada:**



{

&nbsp; "message": "Hola test@example.com, estás en el dashboard"

}



**4. Logout**



POST /api/accounts/logout/

Headers:



Authorization: Token 018558131f0bd5bd7d832f7ad587feee32a79b0f





**Respuesta esperada:**



{

&nbsp; "success": "Sesión cerrada"

}



**5. Listado de roles**



GET /api/accounts/roles/

Headers:



Authorization: Token 018558131f0bd5bd7d832f7ad587feee32a79b0f





**Respuesta esperada:**



\[

&nbsp; {

&nbsp;   "id": 1,

&nbsp;   "jordy": "Admin"

&nbsp; },

&nbsp; {

&nbsp;   "id": 2,

&nbsp;   "alisson": "Usuario"



&nbsp; }


