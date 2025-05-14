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
            # Consulta SQL 
            sentencia = 'DELETE FROM persona WHERE id_persona IN %s' 

            # Vamos a darle al usuario la posibilidad de eliminar por id
            entrada = input('Digite los numeros de id que quiere eliminar (Separados por coma): ')
            
            # Creamos una variable
            valores = (tuple(entrada.split(',')), ) # Tupla de tuplas
            
            # Ejecuta la consulta SQL
            cursor.execute(sentencia, valores)
            
            # Obtiene todos los registros resultantes de la consulta
            registros_eliminados = cursor.rowcount

            print(f'Los registros eliminados son: {registros_eliminados}')

except Exception as e:
    # Manejo de errores: captura cualquier excepción durante la ejecución
    print(f'Ocurrió un error: {e}')

finally:
    # Este bloque se ejecuta siempre, asegurando que la conexión se cierre
    conexion.close()
    print("Conexión cerrada correctamente")