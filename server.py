# server.py
from flask import Flask, jsonify, request
from flask_cors import CORS  # Importe o CORS do Flask-CORS
from gdacs.api import GDACSAPIReader
import geojson
import pymysql
app = Flask(__name__)
CORS(app)  # Configure o CORS para permitir todas as origens

# server.py
from flask import Flask, jsonify, request
from flask_cors import CORS  # Importe o CORS do Flask-CORS
from gdacs.api import GDACSAPIReader
import geojson

app = Flask(__name__)
CORS(app)  # Configure o CORS para permitir todas as origens

connection = pymysql.connect(
    host='localhost',
    user='gustavo',
    password='gustavo123',
    database='earthWatcher',
)


@app.route('/api/receiveAlert', methods=['POST'])
def receiveAlert():
    # Receber dados do corpo da requisição
    data = request.json
    
    # Extrair o email dos dados recebidos
    email = data.get('email')

    try:
        # Criar um cursor para interagir com o banco de dados
        with connection.cursor() as cursor:
            # Executar a consulta SQL para inserir o email na tabela 'emails'
            sql = "INSERT INTO emails (email) VALUES (%s)"
            cursor.execute(sql, (email,))
            
            # Commit para salvar as alterações no banco de dados
            connection.commit()
        
        # Retornar uma resposta de sucesso
        return jsonify({'message': 'Email recebido com sucesso!',
                        'error': False}), 201
    except Exception as e:
        # Em caso de erro, rollback para reverter quaisquer alterações pendentes
        connection.rollback()
        
        # Retornar uma resposta de erro
        return jsonify({'message': 'Erro ao enviar dados','error': True}), 500
    
@app.route('/api/checkEmail', methods=['POST'])
def checkEmail():
    # Receber dados do corpo da requisição
    data = request.json
    
    # Extrair o email dos dados recebidos
    email = data.get('email')

    try:
        # Criar um cursor para interagir com o banco de dados
        with connection.cursor() as cursor:
            # Executar a consulta SQL para verificar se o email já existe na tabela 'proUsers'
            sql = "SELECT EXISTS(SELECT 1 FROM proUsers WHERE email = %s)"
            cursor.execute(sql, (email,))
            exists = cursor.fetchone()[0]

            # Retornar True se o e-mail existe, False se não existe
            return jsonify({'exists': exists}), 200
    except Exception as e:
        # Em caso de erro, retornar False
        return jsonify({'exists': False}), 500

def convert_to_serializable(data):
    """
    Função auxiliar para converter objetos GeoJSON para um formato serializável.
    """
    return {'nome': 'Gu', 'altura': '190cm'}

@app.route('/api/latest-events', methods=['GET'])
def get_latest_events():
    client = GDACSAPIReader()
    eventos = client.latest_events()
    serializable_eventos = [convert_to_serializable(evento) for evento in eventos]

    return jsonify(serializable_eventos)

@app.route('/api/latest-events/<int:limit>', methods=['GET'])
def get_latest_events_limited(limit):
    client = GDACSAPIReader()
    eventos = client.latest_events(limit=limit)
    serializable_eventos = [convert_to_serializable(evento) for evento in eventos]
    return jsonify(serializable_eventos)

@app.route('/api/events-by-type/<string:event_type>', methods=['GET'])
def get_events_by_type(event_type):
    limit = request.args.get('limit', default=10, type=int) 
    client = GDACSAPIReader()
    eventos = client.latest_events(event_type=event_type, limit=40)
    return jsonify({'features':eventos.features,'pagination':{'a': 1,'b':2}})

@app.route('/api/historic/<string:event_type>', methods=['GET'])
def get_historic_events(event_type):
    limit = request.args.get('limit', default=10, type=int) 
    client = GDACSAPIReader()
    eventos = client.get_event(event_type='FL', event_id='1432393', episode_id='1575769')
    return jsonify({'features':eventos})

if __name__ == '__main__':
    app.run(debug=True)


def convert_to_serializable(data):
    """
    Função auxiliar para converter objetos GeoJSON para um formato serializável.
    """
    return {'nome': 'Gu', 'altura': '190cm'}

@app.route('/api/latest-events', methods=['GET'])
def get_latest_events():
    client = GDACSAPIReader()
    eventos = client.latest_events()
    serializable_eventos = [convert_to_serializable(evento) for evento in eventos]

    return jsonify(serializable_eventos)

@app.route('/api/latest-events/<int:limit>', methods=['GET'])
def get_latest_events_limited(limit):
    client = GDACSAPIReader()
    eventos = client.latest_events(limit=limit)
    serializable_eventos = [convert_to_serializable(evento) for evento in eventos]
    return jsonify(serializable_eventos)

@app.route('/api/events-by-type/<string:event_type>', methods=['GET'])
def get_events_by_type(event_type):
    limit = request.args.get('limit', default=10, type=int) 
    client = GDACSAPIReader()
    eventos = client.latest_events(event_type=event_type, limit=40)
    return jsonify({'features':eventos.features,'pagination':{'a': 1,'b':2}})

@app.route('/api/historic/<string:event_type>', methods=['GET'])
def get_historic_events(event_type):
    limit = request.args.get('limit', default=10, type=int) 
    client = GDACSAPIReader()
    eventos = client.get_event(event_type='FL', event_id='1432393', episode_id='1575769')
    return jsonify({'features':eventos})


if __name__ == '__main__':
    app.run(debug=True)
