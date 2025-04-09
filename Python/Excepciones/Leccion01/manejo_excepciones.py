from num_iguales_exception import NumerosIgualesException

resultado = None

try:

    a = int(input("Ingrese el primer numero: "))
    b = int(input("Ingrese el segundo numero: "))

    if a == b:
        raise NumerosIgualesException('Son numeros iguales')
    
    resultado = a / b # Modificamos

except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except Exception as e: # La clase padre puede manejar todo tipo error
    print(f'Exception - Ocurrio un error: {e}')

else:
    print("No se arrojo ninguna excepcion")
finally: # Siempre se va a ejecutar
    print("Ejecucion de este bloque finally")
    
print(f'El resultado es: {resultado}')
print('seguimos...')