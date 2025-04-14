#Contexto With, sintaxis simplificada que abre y cierra el archivo sin necesidad de try ni finally
#Ejecuta los metodos __enter__ y __exit__

#with open('prueba.txt', 'r', encoding='utf8') as archivo:
    #print(archivo.read())


from ManejoArchivos import ManejoArchivos

with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())