import psycopg2  # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)'  # %s es un parametro
            valores = ("Carlos", "Lara", "clara@mail.com") # Es una tupla
            cursor.execute(sentencia, valores)  # De esta manera ejecutamos la sentencia
            # conexion.commit() Se usa para guardar cambios en la bd, pero no se usa aca xq ya se guardan con el with
            registros_insertados = cursor.rowcount
            print(f"lOS registros insertados son:  {registros_insertados} " )


except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()
