import psycopg2  # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = (
                ("Pedro", "Hernandez", "phernandez@mail.com", 1),
                ("Francisco Fernando", "Ferdinand", "xf@mail.com", 12),
                ("Mario", "Fernandez", "MFernandez@mail.com", 13)
            )  # Es una tupla de tuplas
            cursor.executemany(sentencia, valores)  # <--- CORREGIDO: era `execu`, ahora es `execute`
            registros_actualizados = cursor.rowcount
            print(f"Los registros actualizados son: {registros_actualizados}")

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()
