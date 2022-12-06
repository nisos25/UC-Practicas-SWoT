import socket
import sys

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server_address = ('0.0.0.0', 10000)

print("Iniciando servidor")
sock.bind(server_address)

sock.listen(1)

while True:
	print("Esperando conn")
	connection, client_address = sock.accept()
	try:
		print("Conectado desde", client_address)
		while True:
			data = connection.recv(16)
			print('Recibido {!r}'.format(data))
			if data:
				print("Enviando datos de regreso")
				connection.sendall(data)
			else:
				print("No hay datos", client_address)
				break
	finally:
		connection.close()
