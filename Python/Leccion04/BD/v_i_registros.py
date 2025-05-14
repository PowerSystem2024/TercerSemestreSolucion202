import psycopg2  # Librería para conectarse a PostgreSQL
from config import DB_CONFIG  # Importa las credenciales desde un archivo de configuración externo

'''
Establece la conexión con la base de datos PostgreSQL usando:
- Usuario, contraseña, host, puerto y nombre de la base de datos
que vienen definidos en el diccionario DB_CONFIG
'''
conexion = psycopg2.connect(
    user=DB_CONFIG['user'],
    password=DB_CONFIG["password"],
    host=DB_CONFIG["host"],
    port=DB_CONFIG["port"],
    database=DB_CONFIG["database"]
)

try:
    # Bloque de transacción automática (with cierra automáticamente al final)
    with conexion:
        # Crea un cursor para ejecutar consultas SQL
        with conexion.cursor() as cursor:
            # Consulta SQL para seleccionar todos los registros de la tabla persona
            # Al usar %s, psycopg2 escapa automáticamente los valores para prevenir inyección SQL.
            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)' 
            
            # Creamos una variable con una tupla de tuplas
            valores = (
                ('Carlos', 'Lara', 'clara@mail.com'),
                ('Marcos', 'Canto', 'mcanto@mail.com'),
                ('Marcelo', 'Cuenca', 'cuenca@gmail.com')) #Es una tupla
            
            # Ejecuta la consulta SQL
            cursor.executemany(sentencia, valores)
            
            # Obtiene todos los registros resultantes de la consulta
            registros_insertados = cursor.rowcount

            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    # Manejo de errores: captura cualquier excepción durante la ejecución
    print(f'Ocurrió un error: {e}')

finally:
    # Este bloque se ejecuta siempre, asegurando que la conexión se cierre
    conexion.close()
    print("Conexión cerrada correctamente")