import psycopg2 #Para poder conectarnos a Postgres

conexion = psycopg2.connect(user = 'postgres',password = 'admin',host = 'localhost',port = '5432',database = 'test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' # placeholder
            id_persona = input("Digite un numero para el id_persona: ")
            cursor.execute(sentencia, (id_persona,)) # De esta manera ejecutamos la sentencia
            # Recuperamos todos los registros como tuplas dentro de una tupla
            registros = cursor.fetchone() #
            print(registros) #[(1, 'Juan', 'Perez', 'jperez@mail.com'), (2, 'Carla', 'Gomez', 'kgomez@gmail.com')]
except Exception as e:
    print(f'Ocurrio un error: {e}') # En caso de que ocurra un error, lo imprimimos
finally:

    conexion.close() # Cerramos la conexion con nuestra base de datos

# https://www.psycopg.org/docs/usage.html
