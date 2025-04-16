try:
    archivo = open('prueba.txt', 'w', encoding='utf8')  #W-> write
    archivo.write('Programamos con diferentes tipos de archivos, ahora en .txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('Como por ejemplo: acción, ejecución, producción\n')
    archivo.write('Letras:\nR(read), \nW(write), \nA(Append), \nX(Exception)')
    archivo.write('\nt es para texto (text), \nb archivos binarios, \nw+ y r+ lee y escribe (funcionan igual\n')
    archivo.write('Es un Error: intentar acceder al archivo después de ejecutar el finally \n')
    archivo.write('Saludos \n')
    archivo.write('Y con esto terminamos')

except Exception as e:
    print(e)
finally:
    archivo.close()


