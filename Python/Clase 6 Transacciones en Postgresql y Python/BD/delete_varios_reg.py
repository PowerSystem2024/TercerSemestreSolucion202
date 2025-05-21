import psycopg2  # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')

try:
    with conexion:
        with conexion.cursor() as cursor:
            entrada = input("Digite los números de registro a eliminar (separados por coma): ")
            ids = tuple(int(id.strip()) for id in entrada.split(","))
            # Creamos una sentencia con tantos %s como IDs haya
            formato = ",".join(["%s"] * len(ids))
            sentencia = f"DELETE FROM persona WHERE id_persona IN ({formato})"
            cursor.execute(sentencia, ids)
            registros_eliminados = cursor.rowcount
            print(f"Los registros eliminados son: {registros_eliminados}")

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()
