# Para insatalar PostgrSQL y PgAdmin (Web) en Linux Ubuntu

## 📌 Prerrequisitos
- Sistema operativo Ubuntu (18.04, 20.04, 22.04 o superior)
- Acceso a terminal con privilegios de sudo
- Conexión a internet

## 🚀 Pasos de Instalación

1. Actualizar paquetes del sistema
```bash
sudo apt update && sudo apt upgrade -y
```

2. Instalar PostgreSQL

```bash
sudo apt install postgresql postgresql-contrib -y
```

3. Verificamos la instalacion

```bash
sudo systemctl status postgresql
```

4. Version instalada

```bash
psql --version
```

## ⚙️ Configuración Inicial

1. Acceder a PostgreSQL

```bash
sudo -u postgres psql
```

2. Cambiar contraseña del usuario postgres (Dentro de psql)

```bash
ALTER USER postgres PASSWORD 'tu_nueva_contraseña_segura';
```

3. Crear un nuevo usuario (opcional)

```bash
CREATE USER tu_usuario WITH PASSWORD 'contraseña_segura' CREATEDB CREATEROLE;
```

4. Salir de psql

```bash
\q
```

## 🔄 Comandos útiles de administración

- Iniciar/Detener/Reiniciar el servicio

```bash
sudo systemctl start postgresql    # Iniciar
sudo systemctl stop postgresql    # Detener
sudo systemctl restart postgresql # Reiniciar
```

## Habilitar inicio automático

```bash
sudo systemctl enable postgresql
```
## 🔍 Conectarse remotamente (Opcional)

1. Editar archivo de configuración

```bash
sudo nano /etc/postgresql/*/main/postgresql.conf
```

- Buscar y cambiar:

```bash
listen_addresses = '*'
```

2. Configurar acceso en pg_hba.conf

```bash
sudo nano /etc/postgresql/*/main/pg_hba.conf
```

- Añadir al final:

```bash
host    all             all             0.0.0.0/0               md5
```

3. Reiniciar PostgreSQL

```bash
sudo systemctl restart postgresql
```

## 📦 Instalar pgAdmin4 (Opcional)

Desde la tienda propia de linux. De otro modo, en linux, en la pagina oficial lo recomienda como un entorno Python o Docker. Vamos a dar los pasos para instalar con Python.

```bash
>> sudo mkdir /var/lib/pgadmin # Creamos el archivo pgadmin en lib
>> sudo mkdir /var/log/pgadmin # Creamos el archivo pgadmin en log
>> sudo chown $USER /var/lib/pgadmin # Cambiamos los privilegios
>> sudo chown $USER /var/log/pgadmin # Cambiamos los privilegios
>> python3 -m venv pgadmin4 # Creamos el entorno virtual de python
>> source pgadmin4/bin/activate # Lo activamos
>> (pgadmin4) $ pip install pgadmin4 # instalamos pgadmin con pip
```

Luego nos va a pedir cuando inicialicemos **email** y **password**.

```bash
>> (pgadmin4) $ pgadmin4 # Inicializamos pgAdmin

NOTE: Configuring authentication for SERVER mode.

Enter the email address and password to use for the initial pgAdmin user account:

Email address: user@domain.com
Password: 
Retype password:
Starting pgAdmin 4. Please navigate to http://127.0.0.1:5050 in your browser.
 * Serving Flask app "pgadmin" (lazy loading)
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: off
```

Luego con **CTRL+Click izquierdo** sobre la direccion nos abre el navegador y podemos empezar a trabajar.

----
# Documentacion oficial
https://www.postgresql.org/docs/
https://www.pgadmin.org/
