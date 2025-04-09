# Extendemos de la clase padre Exception
class NumerosIgualesException(Exception):
    def __init__(self, mensaje):
        self.message = mensaje