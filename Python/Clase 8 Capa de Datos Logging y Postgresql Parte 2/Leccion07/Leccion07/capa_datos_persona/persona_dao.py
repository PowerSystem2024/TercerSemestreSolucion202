"""
DAO  significa: Data Access Object
CRUD significa:
               Create -> Insertar
               Read -> Seleccionar
               Update -> Actualizar
               Delete -> Eliminar
"""

# Consulta para seleccionar todos los registros ordenados por ID
SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'

# Consulta para insertar un nuevo registro
INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'

# Consulta para actualizar un registro existente
ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'

# Consulta para eliminar un registro por ID
ELIMINAR = 'DELETE FROM persona WHERE id_persona=%s'
