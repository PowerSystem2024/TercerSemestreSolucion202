import psycopg2  # Para conectarnos a PostgreSQL

# Inicializamos la variable conexion como None
conexion = None

try:
    conexion = psycopg2.connect(
        host="127.0.0.1",
        database="test_bd",
        user="postgres",
        password="admin",
        port="5432"
    )

    with conexion:
        with conexion.cursor() as cursor:
            # Solicitar IDs al usuario
            entrada = input("Digite los id_persona a buscar (separados por coma): ")

            # Convertir entrada a tupla de enteros
            try:
                ids = tuple(int(id.strip()) for id in entrada.split(","))
            except ValueError:
                print("Error: Ingrese solo números separados por comas")
                exit()

            # Consulta SQL con parámetros
            sentencia = "SELECT * FROM persona WHERE id_persona IN %s"
            cursor.execute(sentencia, (ids,))  # Note la coma para crear una tupla de un solo elemento

            # Obtener y mostrar resultados
            registros = cursor.fetchall()
            print("\nRegistros encontrados:")
            for registro in registros:
                print(registro)
            print(f"\nTotal de registros encontrados: {len(registros)}")

except psycopg2.Error as e:
    print(f"Error al conectar a PostgreSQL: {e}")

finally:
    if conexion is not None:
        conexion.close()
        print("\nConexión cerrada")