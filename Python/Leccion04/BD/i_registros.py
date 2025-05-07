import psycopg2 #Para poder conectarnos a Postgres

conexion = psycopg2.connect(user = 'postgres',password = 'admin',host = 'localhost',port = '5432',database = 'test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUE(%s, %s, %s)'
            valores =('Carlos', 'Lara', 'clara@mial.com') # es una tupla
            cursor.execute(sentencia, valores) # De esta manera ejecutamos la sentencia
            #conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrio un error: {e}') # En caso de que ocurra un error, lo imprimimos
finally:

    conexion.close()