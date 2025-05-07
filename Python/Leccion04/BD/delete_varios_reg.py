import psycopg2  # Para poder conectarnos a Postgres

conexion = psycopg2.connect(user='postgres', password='admin', host='localhost', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE FROM persona  WHERE id_persona IN %s'
            entrada = input('Digite el numero de registro a eliminar (separados por coma) : ')
            valores =(tuple(entrada.split(', ')), ) # es una tupla de tuplas
            cursor.executemany(sentencia, valores)  # De esta manera ejecutamos la sentencia
            # conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            registros_eliminados = cursor.rowcount
            print(f'Los registros eliminados son: {registros_eliminados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')  # En caso de que ocurra un error, lo imprimimos
finally:

    conexion.close()