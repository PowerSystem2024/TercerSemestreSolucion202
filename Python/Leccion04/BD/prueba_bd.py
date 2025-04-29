import psycopg2 #Para poder conectarnos a Postgres

#print(f"Version: {psycopg2.__libpq_version__}")
conexion = psycopg2.connect(
    user = 'postgres',
    password = 'admin',
    host = 'localhost',
    port = '5432',
    database = 'test_bd'
)

#print(conexion)
cursor = conexion.cursor()
sentencia = 'SELECT * FROM persona'
cursor.execute(sentencia) # De esta manera ejecutamos la sentencia
# Recuperamos todos los registros como tuplas dentro de una tupla
registros = cursor.fetchall() #
print(registros) #[(1, 'Juan', 'Perez', 'jperez@mail.com'), (2, 'Carla', 'Gomez', 'kgomez@gmail.com')]

cursor.close() # Cerramos la conexion con el objeto cursor
conexion.close() # Cerramos la conexion con nuestra base de datos