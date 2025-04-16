#Ruta de ejemplo cuando el archivo esta fuera de mi carpeta de trabajo:
# archivo = open('c:\\user......')

archivo = open('prueba.txt', 'r', encoding='utf8')  # R -> read
#print(archivo.read()) # lee todo el archivo
#print(archivo.read(16)) #lee los primeros 15 caracteres
#print(archivo.read(10)) #continua desde la linea anterior
#print(archivo.readline()) #lee la linea completa


#ITERAR LINEAS EN ARCHIVO:
#for linea in archivo:
    #print(linea) #itera por cada linea
    #print(archivo.readlines()[3]) #imprime como lista, para acceder es de la misma forma de listas, con []


#Anexar informacion, copiar a otro
archivo2 = open('copia.txt', 'a', encoding='utf8')
archivo2.write(archivo.read())
archivo.close()
archivo2.close()
 #si usamos a, cada vez que ejecutemos se agregara una copia del contenido dentro de copia, para evitarlo usar w