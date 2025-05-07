import psycopg2  # Para poder conectarnos a Postgres

conexion = psycopg2.connect(user='postgres', password='admin', host='localhost', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores =(
                ('Juan', 'Perez', 'jperez@mial.com', 4),
                ('Romina', 'Ayala', 'ayalar@mail.com')
            ) # es una tupla
            cursor.executemany(sentencia, valores)  # De esta manera ejecutamos la sentencia
            # conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            registros_actualizados = cursor.rowcount
            print(f'Los registros actualizados son: {registros_actualizados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')  # En caso de que ocurra un error, lo imprimimos
finally:

    conexion.close()