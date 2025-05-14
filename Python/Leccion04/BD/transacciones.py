import psycopg2 as bd
from config import DB_CONFIG

'''
Establece la conexión con la base de datos PostgreSQL usando los parámetros
definidos en el diccionario DB_CONFIG:
- user: usuario de la base de datos
- password: contraseña del usuario
- host: dirección del servidor
- port: puerto de conexión
- database: nombre de la base de datos
'''
conexion = bd.connect(
    user=DB_CONFIG['user'],
    password=DB_CONFIG["password"],
    host=DB_CONFIG["host"],
    port=DB_CONFIG["port"],
    database=DB_CONFIG["database"]
)

# Inicio de bloque de transacción manual
# En este modo debemos gestionar manualmente los commits y rollbacks
# Nota: La forma preferida es usar un contexto 'with' que maneja esto automáticamente
try:
    conexion.autocommit = False  # Desactivamos autocommit para controlar la transacción
    cursor = conexion.cursor()
    
    # Query de inserción con parámetros
    sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Maria', 'Esparza', 'mesparza@mail.com')
    
    cursor.execute(sentencia, valores)
    conexion.commit()  # Confirmamos la transacción manualmente
    print('Transacción completada con éxito')

except Exception as e:
    conexion.rollback()  # Revertimos la transacción en caso de error
    print(f'Error en la transacción - rollback ejecutado: {e}')

finally:
    # Cerramos la conexión siempre, independientemente del resultado de la transacción
    conexion.close()
    print("Conexión cerrada correctamente")