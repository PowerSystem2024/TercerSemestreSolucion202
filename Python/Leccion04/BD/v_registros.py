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
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s' 
            
            # Creamos una variable
            entrada = input("Digite los Id a buscar (separados por coma): ")
            llaves_primarias = (tuple(entrada.split(', ')), )
            
            # Ejecuta la consulta SQL
            cursor.execute(sentencia, llaves_primarias)
            
            # Obtiene todos los registros resultantes de la consulta
            registros = cursor.fetchall()
            
            # Imprime los registros en la consola con un for
            for registro in registros:    
                print(registro)

except Exception as e:
    # Manejo de errores: captura cualquier excepción durante la ejecución
    print(f'Ocurrió un error: {e}')

finally:
    # Este bloque se ejecuta siempre, asegurando que la conexión se cierre
    conexion.close()
    print("Conexión cerrada correctamente")